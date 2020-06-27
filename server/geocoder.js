const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "mapquest",
  apiKey: "	GJGhUwWJeExwlZ2j72l7wjA5bfoP3Xm6",
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
