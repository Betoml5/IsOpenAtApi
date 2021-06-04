const express = require("express");
const router = express.Router();
const RestaurantService = require("../services/Restaurant");
const RestaurantServiceLib = new RestaurantService();

router.post("/addfood/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  const { name, price } = req.body;

  const newFood = { name, price };

  try {
    const food = await RestaurantServiceLib.addFood(shopId, newFood);
    return res.status(200).send({ food });
  } catch (error) {
    next(error);
  }
});

router.delete("/removefood/:shopId?/:foodIndex?", async (req, res, next) => {
  const { shopId, foodIndex } = req.params;

  try {
    const restaurantId = await RestaurantServiceLib.removeFood(
      shopId,
      foodIndex
    );
    return res.status(200).send({ restaurantId });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
