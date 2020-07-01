const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

// public routes

//Get All
router.get("/", async (req, res) => {
  const data = await Blog.find({});
  res.send(data);
});

//authed routes

//auth middleware check
//if logged in allow
//if not logged in return 'un authorized' status code
router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send("please login");
  }
});

//Get By Id
router.get("/:id", async (req, res) => {
  const data = await Blog.find({ userId: req.params.id });
  res.send(data);
});

/*
    {
        title: String,
        body: String,
    }
*/

//New Route
router.post("/new", async (req, res) => {
  req.body.userId = req.session.user.id; //ensure logged in user owns this list
  try {
    const data = await Blog.create(req.body);
    res.json(data);
  } catch {
    res.status(400).send("bad request!");
  }
});

//Update Route
router.patch("/update/:id", async (req, res) => {
  try {
    const data = await Blog.findByIdAndUpdate(
      { _id: req.params.id, userId: req.session.user.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(data);
  } catch {
    res.status(400).send("bad request");
  }
});

//Delete Route
router.delete("/delete/:id", async (req, res) => {
  try {
    const data = await Blog.findByIdAndDelete({
      _id: req.params.id,
      userId: req.session.user.id,
    });
    res.json(data);
  } catch {
    res.status(400).send("bad request");
  }
});

module.exports = router;
