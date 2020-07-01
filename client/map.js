import getAllTrainersApi from "./src/api/trainer/getAllTrainersApi.js";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9vc2hpbmVzIiwiYSI6ImNrYzJtN2NsdjAzcWYycHAzMGJuZ2l5bjQifQ.dpz8OOGJk_7a3ArUBcR2Ew";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 9,
  center: [-33.8764589, 151.1946216], //cbd long ant lat
});

// Fetch trainers from API
async function getTrainers() {
  const data = getAllTrainersApi();

  const trainers = data.data.map((trainer) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          trainer.location.coordinates[0],
          trainer.location.coordinates[1],
        ],
      },
      properties: {
        name: trainer.trainerId,
        icon: "human",
      },
    };
  });

  loadMap(trainers);
}

// Load map with trainers
function loadMap(trainers) {
  map.on("load", function () {
    map.addLayer({
      id: "points",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: trainers,
        },
      },
      layout: {
        "icon-image": "{icon}-15",
        "icon-size": 1.5,
        "text-field": "{trainerId}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.9],
        "text-anchor": "top",
      },
    });
  });
}

getTrainers();
