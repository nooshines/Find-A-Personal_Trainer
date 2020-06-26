const mongoose = require("mongoose");
const geocoder = require("../geocoder.js");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  certificate: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Please add an adress"],
  },
  available: {
    type: Boolean,
    default: false,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
  },
});

// ref - > https://dev.to/sanderdebr/let-s-build-full-stack-visited-places-app-node-js-api-mongodb-and-mapbox-4514

//geocode the address and then save it to database
schema.pre("save", async function (next) {
  const loc = await geocoder.geocode(this.address);
  console.log(loc);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
  };
  // Do not save address
  this.address = undefined;
  next();
});

module.exports = mongoose.model("Trainer", schema);
