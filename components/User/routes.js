const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { config } = require("../../config/index");
const passport = require("passport");
const response = require("../../network/response");
const jwt = require("jsonwebtoken");

router.post("/create", async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await controller.createUser(username, email, password);
    return response.success(req, res, user, 201);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      // Verificamos si hubo algun error o no hay usuario.
      if (err || !user) {
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
      return Boom.internal("An error occurred");
    }
  })(req, res, next);
});

router.get("/all", async (req, res, next) => {
  try {
    const users = await controller.getUsers();
    return response.success(req, res, users, 200);
  } catch (error) {
    response.error(res, res, error, 500);
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
      const user = await controller.getUser(id);
      if (!user) return res.status(404).send({ message: "User not found" });
      return response.success(req, res, user, 200);
    } catch (error) {
      console.log(error);
      return response.error(req, res, error, 401);
    }
  }
);

router.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await controller.getUser(id);
    return response.success(req, res, user, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/favorites/add/:userId?/:shopId?", async (req, res, next) => {
  const { userId, shopId } = req.params;
  try {
    const userUpdated = await controller.addFavorite(userId, shopId);
    return response.success(req, res, userUpdated, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.delete("/favorites/delete/:userId?/:shopId?", async (req, res, next) => {
  const { userId, shopId } = req.params;

  try {
    const removedShop = await controller.removeFavorite(userId, shopId);

    return response.success(req, res, removedShop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/favorites/:userId?", async (req, res, next) => {
  const { userId } = req.params;
  try {
    const favorites = controller.getFavorites(userId);
    return response.success(req, res, favorites, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/image/:id", async (req, res, next) => {
  const { imageurl } = req.body;
  const { id } = req.params;
  console.log(req.body);

  try {
    const userUpdated = await controller.setImage(id, imageurl);
    return response.success(req, res, userUpdated, 200);
  } catch (error) {
    console.log(error.message);
    return response.error(req, res, error, 500);
  }
});

module.exports = router;
