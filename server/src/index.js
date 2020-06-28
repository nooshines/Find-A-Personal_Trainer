const express = require("express");
const session = require("express-session");

require("./mongo");

//variables
const port = 6000;

//setup express app
const app = express();

//routes
const trainerRouter = require("./routes/trainerRouter");
const authRouter = require("./routes/authRouter");
const blogRouter = require("./routes/blogRouter");

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
app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log("listening to port 6000");
});
