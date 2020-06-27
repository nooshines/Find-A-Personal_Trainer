const express = require("express");
const router = express.Router();
const Auth = require("../models/Auth");
const bcrypt = require("bcryptjs");

/* expects
    {
        username: String,
        email:String
        password: String
    }
*/
router.post("/new", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  const data = await Auth.create(req.body);
  res.send(data);
});

router.post("/login", async (req, res) => {
  const user = await Auth.findOne({ username: req.body.username });
  let status = 404;
  let msg = "try again";

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    //add to session
    //create a new variable on the session object called user, adding user
    //info from the database
    req.session.user = {
      username: user.username,
      id: user._id,
      loggedIn: true,
    };
    status = 200;
    msg = req.session.user;
  }

  res.status(status).send(msg);
});

router.get("/logout", (req, res) => {
  //destroy session
  req.session.destroy(() => {
    res.send("logged out");
  });
});

module.exports = router;
