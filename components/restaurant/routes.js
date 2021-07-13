const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.post("/food/add/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  const { name, price } = req.body;

  const newFood = { name, price };

  try {
    const food = await controller.add(shopId, newFood);
    return response.success(req, res, food, 201);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.delete("/food/remove/:shopId?/:foodIndex?", async (req, res) => {
  const { shopId, foodIndex } = req.params;
  try {
    const food = await controller.add(shopId, foodIndex);
    return response.success(req, res, food, 201);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/menu/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const menu = await controller.menu(shopId);
    return response.success(req, res, menu, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

module.exports = router;
