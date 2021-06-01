const express = require("express");
const UserService = require("../services/User");
const router = express.Router();
const UserServiceLib = new UserService();

router.post("/user", async (req, res, next) => {
  const { userName, password, email } = req.body;
  try {
    const user = await UserServiceLib.createUser(userName, email, password);

    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/users", async (req, res) => {
  const users = await UserServiceLib.getUsers();
  console.log(users);
  return res.status(200).send({ users });
});

//Test method. Just avoid it
router.post("/", (req, res) => {
  return res.status(200).send("Hola mundo");
});

module.exports = router;
