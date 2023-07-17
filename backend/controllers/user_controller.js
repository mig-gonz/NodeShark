// const router = require("express").Router();

// const db = require("../models");
// const bcrypt = require("bcrypt");
// const { User } = db;

//Register User
// router.post("/register", async (req, res) => {
//   let { password, ...rest } = req.body;
//   res.set("Access-Control-Allow-Origin", "*");
//   const user = await User.create({
//     ...rest,
//     passwordDigest: await bcrypt.hash(password, 10),
//   });
//   res.json(user);
// });

// module.exports = router;
// const router = require("express").Router();
// const db = require("../models");
// const argon2 = require("argon2");
// const { User } = db;

// // Register User
// router.post("/register", async (req, res) => {
//   let { password, ...rest } = req.body;
//   res.set("Access-Control-Allow-Origin", "*");
//   try {
//     const hashedPassword = await argon2.hash(password);
//     const user = await User.create({
//       ...rest,
//       passwordDigest: hashedPassword,
//     });
//     res.json(user);
//   } catch (error) {
//     console.error("Error registering user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;

const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcryptjs");
const { User } = db;

// Register User
router.post("/register", async (req, res) => {
  let { password, ...rest } = req.body;
  res.set("Access-Control-Allow-Origin", "*");
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      ...rest,
      passwordDigest: hashedPassword,
    });
    res.json(user);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
