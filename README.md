# Distance Calculator API 🌍
Calculate the geographical distance between two sets of latitude and longitude coordinates using the Haversine formula.

## Features
- Calculate distance between two coordinates.
- Supports distance measurement in kilometers, meters, and miles.
- Built with Express.js.

## Installation
Clone the repository:
```
git clone https://github.com/your-username/distance-calculator-api.git
```

Navigate to the project directory:
```
cd distance-calculator-api
```

Install the dependencies:
```
npm install
```

Start the server:
```
node server.js
```
## Usage
Once the server is running, navigate to http://localhost:3000 in your browser to access the API documentation and test the endpoints.

## API Documentation
### Endpoint:
```
GET /:lat1-:lng1/:lat2-:lng2/:unit?
```
### Parameters:

- lat1, lng1: Latitude and Longitude of the first location.
- lat2, lng2: Latitude and Longitude of the second location.
- unit (optional): Desired unit for the result distance. Can be 'kilometers' (default), 'meters', or 'miles'.
### Response:
```
{
    "distance": 1234.56,
    "unit": "kilometers"
}
```

## License
MIT
