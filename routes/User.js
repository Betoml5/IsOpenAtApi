const express = require("express");
const UserService = require("../services/User");
const router = express.Router();
const UserServiceLib = new UserService();

router.post("/user", (req, res) => {
  const { userName, password, email } = req.body;
  const user = UserServiceLib.createUser(userName, password, email);

  return res.status(200).send(user);
});

router.post("/", (req, res) => {
  return res.status(200).send("Hola mundo");
});

module.exports = router;
