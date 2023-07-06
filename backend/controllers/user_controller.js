const express = require("express");
const user = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const { User } = db;

//Register User
user.post("/register", async (req, res) => {
  let { password, ...rest } = req.body;
  res.set("Access-Control-Allow-Origin", "*");
  const user = await User.create({
    ...rest,
    passwordDigest: await bcrypt.hash(password, 10),
  });
  res.json(user);
});

//Login-Authenticate User
user.post("/login", async (req, res) => {
  let user = await User.findOne({
    where: { email: req.body.email },
  });

  if (
    !user ||
    !(await bcrypt.compare(req.body.password, user.passwordDigest))
  ) {
    res.status(404).json({
      message: `Could not find a user with the provided username and password`,
    });
  } else {
    res.json({ user });
  }
});

module.exports = user;
