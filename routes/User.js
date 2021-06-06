const express = require("express");
const passport = require("passport");
const UserService = require("../services/User");
const router = express.Router();
const UserServiceLib = new UserService();
const jwt = require("jsonwebtoken");
const { config } = require("../config");
const Shop = require("../models/Shop");

router.post("/create", async (req, res, next) => {
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
      // Verificamos si hubo algun error o no hay usuario.
      if (err || !user) {
        const error = new Error("New error");
        return next(err);
      }

      // Req.login nos lo proporciona passport.
      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);
        const body = { _id: user._id, username: user.username };
        const token = jwt.sign({ user: body }, config.authJwtSecret);
        return res.status(200).send({ token, body });
      });
    } catch (e) {
      return next(e);
    }
  })(req, res, next);
});

router.get("/all", async (req, res, next) => {
  try {
    const users = await UserServiceLib.getUsers();
    return res.status(200).send({ users });
  } catch (error) {
    next(error);
  }
});

// Cuando intentemos entrar al perfi de usuario
// Validamos antes si hay un JWT valido.

router.get(
  "/profile/:id?",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await UserServiceLib.getUserById(id);
      if (!user) return res.status(404).send({ message: "User not found" });

      return res.status(200).send({ user });
    } catch (error) {
      next(error);
      return res.status(401).send({ message: "Falta el token", error });
    }
  }
);

router.get("/user/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserServiceLib.getUserById(id);
    return res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
});

router.patch("/addfavorites/:userId?/:shopId?", async (req, res, next) => {
  const { userId, shopId } = req.params;
  try {
    const userUpdated = await UserServiceLib.addFavorites(userId, shopId);
    return res.status(200).send({ userUpdated });
  } catch (error) {
    next(error);
  }
});

router.get("/:userId?/favorites", async (req, res, next) => {
  const { userId } = req.params;
  try {
    const favorites = await UserServiceLib.getFavorites(userId);
    return res.status(200).send({ favorites });
  } catch (error) {
    next(error);
  }
});

//Test method. Just avoid it
router.post("/", (req, res) => {
  return res.status(200).send("Hola mundo");
});

module.exports = router;
