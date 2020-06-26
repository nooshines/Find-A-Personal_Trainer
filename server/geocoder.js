const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "google", //process.env.GEOCODER_PROVIDER ??

  // Optional depending on the providers
  fetch: customFetchImplementation,
  apiKey: "YOUR_API_KEY", // for Mapquest, OpenCage, Google Premier //process.env.GEOCODER_API_KEY ??
  formatter: null, // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
