const express = require("express");
const router = express.Router();
const ShopService = require("../services/Shop");
const ShopModel = require("../models/Shop");

const ShopServiceLib = new ShopService();

router.get("/all", async (req, res, next) => {
  try {
    const shops = await ShopServiceLib.getShops();
    return res.status(200).send({ shops });
  } catch (error) {
    next(error);
  }
});

router.get("/:id?", async (req, res, next) => {
  const { id } = req.params;
  try {
    const shop = await ShopServiceLib.getById(id);
    return res.status(200).send({ shop });
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  const { name, address, email, phone } = req.body;

  try {
    const shop = await ShopServiceLib.create(name, email, address, phone);
    return res.status(201).send({ shop });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id?", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedId = await ShopServiceLib.delete(id);
    return res.status(200).send({ deletedId });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id?", async (req, res, next) => {
  const { id } = req.params;
  const { name, email, address } = req.body;

  try {
    const shopId = await ShopServiceLib.update(id, name, email, address);
    return res.status(200).send({ shopId });
  } catch (error) {
    next(error);
  }
});



module.exports = router;
