const express = require("express");
const router = express.Router();
const ShopService = require("../services/Shop");
const ShopModel = require("../models/Shop");
const Shop = require("../models/Shop");

const ShopServiceLib = new ShopService();

router.get("/all", async (req, res, next) => {
  try {
    const shops = await ShopServiceLib.getShops();
    return res.status(200).send({ shops });
  } catch (error) {
    next(error);
  }
});

router.get("/shop/:id?", async (req, res, next) => {
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

router.delete("/remove/:id?", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedId = await ShopServiceLib.delete(id);
    return res.status(200).send({ deletedId });
  } catch (error) {
    next(error);
  }
});

// TODO -> Ver si realmente necesitamos esta ruta
router.patch("/update/:id?", async (req, res, next) => {
  const { id } = req.params;
  const { name, email, address } = req.body;

  try {
    const shopId = await ShopServiceLib.update(id, name, email, address);
    return res.status(200).send({ shopId });
  } catch (error) {
    next(error);
  }
});

router.patch("/ispromo/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  const { promo } = req.body;
  try {
    const shopUpdate = await Shop.findOneAndUpdate(
      shopId,
      { promo: promo },
      { new: true }
    );
    return res.status(200).send({ shopUpdate });
  } catch (error) {
    next(error);
  }
});

router.patch("/ishot/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  const { hot } = req.body;
  try {
    const shopUpdate = await Shop.findOneAndUpdate(
      shopId,
      { hot: hot },
      { new: true }
    );
    return res.status(200).send({ shopUpdate });
  } catch (error) {
    next(error);
  }
});

router.patch("/isopenow/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  const { openNow } = req.body;

  try {
    const shopUpdate = await Shop.findOneAndUpdate(
      shopId,
      {
        openNow: openNow,
      },
      { new: true }
    );
    return res.status(200).send({ shopUpdate });
  } catch (error) {
    next(error);
  }
});

router.get("/avg/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const { menu } = await Shop.findById(shopId, { new: true });
    let allPricesSum = 0;
    //Sum every price in the menu
    menu.forEach((comida) => {
      allPricesSum += comida.price;
    });
    // Divide them in the menu length
    const avgPrice = Math.floor(allPricesSum / menu.length);
    return res.status(200).send({ avgPrice });
  } catch (error) {
    next(error);
  }
});

router.get("/famous", async (req, res, next) => {
  try {
    const shops = await Shop.find({});
    let starsAndName = [];

    shops.forEach((element) => {
      starsAndName.push({
        name: element.name,
        stars: element.stars,
      });
    });
    const mostFamous = starsAndName.filter((item) => item.stars >= 3);
    return res.status(200).send({ mostFamous });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
