const express = require("express");
const passport = require("passport");
const UserService = require("../services/User");
const router = express.Router();
const UserServiceLib = new UserService();
const jwt = require("jsonwebtoken");
const { config } = require("../config");

router.post("/user", async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    const user = await UserServiceLib.createUser(username, email, password);
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("New error");
        return next(err);
      }

      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);
        const body = { _id: user._id, username: user.username };
        const token = jwt.sign({ user: body }, "secret_token");
        return res.status(200).send({ token, body });
      });
    } catch (e) {
      return next(e);
    }
  })(req, res, next);
});

router.get("/users", async (req, res, next) => {
  try {
    const users = await UserServiceLib.getUsers();
    console.log(users);
    return res.status(200).send({ users });
  } catch (error) {
    next(error);
  }
});

router.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserServiceLib.getUserById(id);
    return res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
});

//Test method. Just avoid it
router.post("/", (req, res) => {
  return res.status(200).send("Hola mundo");
});

module.exports = router;
