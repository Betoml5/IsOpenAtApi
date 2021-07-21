const express = require("express");
const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response");

router.get("/all", async (req, res, next) => {
  try {
    const shops = await controller.getAll();
    return response.success(req, res, shops, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/shop/:id?", async (req, res, next) => {
  const { id } = req.params;

  try {
    const shop = await controller.get(id);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/name/", async (req, res) => {
  const { name } = req.query;
  try {
    console.log(req.query.name);
    const shops = await controller.getShopByName(name);
    return response.success(req, res, shops, 200);
  } catch (error) {
    // console.log(error);
    return response.error(req, res, error, 500);
  }
});

router.post("/create", async (req, res, next) => {
  const { name, address, email, phone } = req.body;

  try {
    const shop = await controller.create(name, email, address, phone);
    return response.success(req, res, shop, 201);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.delete("/remove/:id?", async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedId = await controller.delete(id);
    return response.success(req, res, deletedId, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

// TODO -> Ver si realmente necesitamos esta ruta
router.patch("/update/:id?", async (req, res, next) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const shopId = await controller.update(id, update);
    return response.success(req, res, shopId, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/setpromo/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const shop = await controller.setPromo(shopId);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/setHot/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const shop = await controller.setHot(shopId);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/avgprice/:shopId?", async (req, res) => {
  const { shopId } = req.params;
  const { avgPrice } = req.body;
  try {
    const shop = await controller.setAvgPrice(shopId, avgPrice);
    console.log(shop);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/setopen/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const shop = await controller.setOpen(shopId);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/famous", async (req, res, next) => {
  try {
    const famous = await controller.famous();
    return response.success(req, res, famous, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/setcode/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  const { code } = req.body;

  try {
    const shop = await controller.setCode(shopId, code);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/avgtime/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  const { avgTime } = req.body;
  try {
    const shop = await controller.setAvgTime(shopId, avgTime);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/rating/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  const { rating } = req.body;
  try {
    const shop = await controller.setRating(shopId, rating);
    response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/shipping/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const shop = await controller.setShipping(shopId);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/highlight/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const shop = await controller.setHighLight(shopId);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/review/:shopId", async (req, res) => {
  const { shopId } = req.params;
  const { email } = req.body;
  const { name, text } = req.query;

  try {
    const review = {
      name,
      text,
      email,
    };
    const shop = await controller.setReview(shopId, review);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/expensive", async (req, res) => {
  try {
    const shops = await controller.getMostExpensiveShops();
    return response.success(req, res, shops, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/cheap", async (req, res) => {
  try {
    const shops = await controller.getCheaperShops();
    return response.success(req, res, shops, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/image-cover/:shopId", async (req, res) => {
  const { shopId } = req.params;
  const { imageURL } = req.body;

  try {
    const shop = await controller.setImageCover(shopId, imageURL);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/image-menu/:shopId", async (req, res) => {
  const { shopId } = req.params;
  const { imageURL } = req.body;
  try {
    const shop = await controller.pushImageMenu(shopId, imageURL);
    return response.success(req, res, shop, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

module.exports = router;
