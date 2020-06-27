const express = require("express");
GeoJSON = require("geojson");
const router = express.Router();
const Trainer = require("../models/Trainer");
const geocoder = require("../geocoder");

//get a list of trainers
//Search for trainers that are near that lng and lat
//URL Params /api/trainers?lng= &lat=
router.post("/findtrainers", async (req, res) => {
  try {
    const geoCoderData = await geocoder.geocode(`${req.body.place}, AU`);
    console.log(geoCoderData);
    console.log(req.body);

    if (geoCoderData && geoCoderData.length) {
      const trainers = await Trainer.find({
        location: {
          $near: {
            // distance in meters from lng and lat values
            $maxDistance: req.body.distance,
            $geometry: {
              type: "Point",
              // Put the actual lng and lat values
              coordinates: [
                geoCoderData[0].longitude,
                geoCoderData[0].latitude,
              ],
            },
          },
        },
      });
      console.log(trainers);
      res.send(trainers);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});

//add a new trainer
router.post("/trainers", async (req, res) => {
  console.log(req.body);
  const geoCoderData = await geocoder.geocode(req.body.address);
  console.log("geocoderdata", geoCoderData);
  if (geoCoderData && geoCoderData.length) {
    req.body.location = {
      type: "Point",
      coordinates: [geoCoderData[0].longitude, geoCoderData[0].latitude],
    };
    req.body.address = geoCoderData[0].formattedAddress;
    const data = await Trainer.create(req.body).catch((err) => {
      console.log(err);
    });
    res.send(data);
  } else res.status(400).send("wrong address entered");
});

//update a trainer

router.patch("/trainers/:id", (req, res) => {
  Trainer.fineOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((trainer) => {
    res.json(trainer);
  });
});

//delete a trainer
router.delete("/trainers/:id", (req, res) => {
  Trainer.findByIdAndDelete({ _id: req.params.id }).then((trainer) => {
    res.send(trainer);
  });
});

module.exports = router;
