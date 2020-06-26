const express = require("express");
GeoJSON = require("geojson");
const router = express.Router();
const Trainer = require("../models/Trainer");

//get a list of trainers

//Search for trainers that are near that lng and lat
//URL Params /api/trainers?lng= &lat=
router.get("/trainers", (req, res) => {
  Trainer.findOne({
    geometry: {
      $geoIntersects: {
        $geometry: {
          type: "Point",
          coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        },
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(req.query);
  // Trainer.aggregate([
  //   {
  //     $geoNear: {
  //       near: {
  //         type: "Point",
  //         coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
  //       },
  //       distanceField: "dist.calculated",
  //       // maxDistance: 1000,
  //       spherical: true,
  //     },
  //   },
  // ]).then(function (trainers) {
  //   res.send(trainers);
  // });
});

//add a new trainer
router.post("/trainers", (req, res) => {
  Trainer.create(req.body).then((trainer) => {
    res.send(trainer);
  });
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
