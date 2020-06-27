const express = require("express");
const session = require("express-session");

require("./mongo");

//variables
const port = 6000;

//setup express app
const app = express();

//routes
const trainerRouter = require("./routes/trainerRouter");

//middleware
app.use(express.json()); //parse JSON body
app.use(
  session({
    secret: "fluffy window cat", //a random string do not copy this value or your stuff will get hacked
    resave: false,
    saveUninitialized: false,
  })
);

//routes
app.use("/api", trainerRouter);

app.listen(port, () => {
  console.log("listening to port 6000");
});
