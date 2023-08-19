const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const distanceCalculator = {
    calculateDistance: function(coord1, coord2) {
        const R = 6371;
        const dLat = this.degreesToRadians(coord2.lat - coord1.lat);
        const dLng = this.degreesToRadians(coord2.lng - coord1.lng);
        
        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.degreesToRadians(coord1.lat)) * Math.cos(this.degreesToRadians(coord2.lat)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
            
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    },
    
    degreesToRadians: function(degrees) {
        return degrees * (Math.PI / 180);
    }
};

app.get('/:lat1-:lng1/:lat2-:lng2/:unit?', (req, res) => {
  const coord1 = {
      lat: parseFloat(req.params.lat1),
      lng: parseFloat(req.params.lng1)
  };
  const coord2 = {
      lat: parseFloat(req.params.lat2),
      lng: parseFloat(req.params.lng2)
  };

  let distance = distanceCalculator.calculateDistance(coord1, coord2);

  switch (req.params.unit) {
      case 'meters':
          distance *= 1000; // Convert km to meters
          break;
      case 'miles':
          distance *= 0.621371; // Convert km to miles
          break;
      default:
          // Default is kilometers
          break;
  }

  res.send({ distance: distance, unit: req.params.unit || 'kilometers' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
