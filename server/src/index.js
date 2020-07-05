const express = require("express");
const session = require("express-session");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const Trainer = require("./models/Trainer");

const upload = multer({ dest: "uploads/" });

require("./mongo");

//variables
const port = 6000;

//setup express app
const app = express();

//routes
const trainerRouter = require("./routes/trainerRouter");
const authRouter = require("./routes/authRouter");
const blogRouter = require("./routes/blogRouter");

//static path
app.use(express.static(path.join(__dirname, "../", "uploads/")));

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

//file upload
app.post("/fileupload", upload.single("avatar"), async (req, res) => {
  console.log(req.file);
  console.log(__dirname);
  fs.rename(
    path.join(__dirname, "../", "uploads/", req.file.filename),
    path.join(__dirname, "../", "uploads/", req.file.originalname),
    (e) => {
      console.log(e);
    }
  );
  const profile = await Trainer.findOne({ userId: req.session.user.id });
  profile.imageUrl = req.file.originalname;
  await profile.save();
  console.log(profile);
  res.send(profile);
});

app.listen(port, () => {
  console.log("listening to port 6000");
});
