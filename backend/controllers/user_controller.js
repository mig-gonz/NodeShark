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

module.exports = user;
