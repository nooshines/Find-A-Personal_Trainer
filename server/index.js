const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");

require("./mongo");

//setup express app
const app = express();

app.use(bodyParser.json());

app.use("/api", routes);

app.listen(6000, () => {
  console.log("listening to port 6000");
});
