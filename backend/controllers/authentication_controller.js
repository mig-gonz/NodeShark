// const router = require("express").Router();
// const db = require("../models");
// const bcrypt = require("bcrypt");

// const { User } = db;

// router.post("/", async (req, res) => {
//   let user = await User.findOne({
//     where: { email: req.body.email },
//   });

//   if (
//     !user ||
//     !(await bcrypt.compare(req.body.password, user.passwordDigest))
//   ) {
//     res.status(404).json({
//       message: `Could not find a user with the provided username and password`,
//     });
//   } else {
//     // req.session.userId = user.userId;
//     req.session.user = user;
//     res.json({ user });
//   }
// });

// router.get("/profile", async (req, res) => {
//   try {
//     if (req.session.user) {
//       res.json(req.session.user);
//     } else {
//       res.json(null);
//     }
//   } catch {
//     res.json(null);
//   }
// });

// router.post("/logout", async (req, res) => {
//   try {
//     req.session.destroy();
//     res.sendStatus(200);
//   } catch (error) {
//     res.status(500).json({ message: "Logout failed" });
//   }
// });

// module.exports = router;
// const router = require("express").Router();
// const db = require("../models");
// const argon2 = require("argon2");

// const { User } = db;

// router.post("/", async (req, res) => {
//   let user = await User.findOne({
//     where: { email: req.body.email },
//   });

//   if (!user || !(await argon2.verify(user.passwordDigest, req.body.password))) {
//     res.status(404).json({
//       message: "Could not find a user with the provided email and password",
//     });
//   } else {
//     req.session.user = user;
//     res.json({ user });
//   }
// });

// router.get("/profile", async (req, res) => {
//   try {
//     if (req.session.user) {
//       res.json(req.session.user);
//     } else {
//       res.json(null);
//     }
//   } catch {
//     res.json(null);
//   }
// });

// router.post("/logout", async (req, res) => {
//   try {
//     req.session.destroy();
//     res.sendStatus(200);
//   } catch (error) {
//     res.status(500).json({ message: "Logout failed" });
//   }
// });

// module.exports = router;
const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcryptjs");

const { User } = db;

router.post("/register", async (req, res) => {
  let { password, ...rest } = req.body;
  res.set("Access-Control-Allow-Origin", "*");
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    ...rest,
    passwordDigest: hashedPassword,
  });
  res.json(user);
});

router.post("/", async (req, res) => {
  let user = await User.findOne({
    where: { email: req.body.email },
  });

  if (
    !user ||
    !(await bcrypt.compare(req.body.password, user.passwordDigest))
  ) {
    res.status(404).json({
      message: "Could not find a user with the provided username and password",
    });
  } else {
    req.session.user = user;
    res.json({ user });
  }
});

// Other routes...

module.exports = router;
