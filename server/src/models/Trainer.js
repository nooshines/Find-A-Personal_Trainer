const mongoose = require("mongoose");
// const geocoder = require("../geocoder");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

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
  bio: {
    type: String,
    required: false,
  },
  imageUrl: String,
  location: {
    type: pointSchema,
    index: "2dsphere",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
  },
});

// //geocode the address and then save it to database
// schema.pre("save", async function (next) {
//   const loc = await geocoder.geocode(this.address);
//   console.log(loc);
//   this.location = {
//     type: "Point",
//     coordinates: [loc[0].longitude, loc[0].latitude],
//     formattedAddress: loc[0].formattedAddress,
//   };
//   // Do not save address
//   this.address = undefined;
//   next();
// });

module.exports = mongoose.model("Trainer", schema);
