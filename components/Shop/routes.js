const express = require("express");
const controller = require("./controller");
const router = express.Router();
const response = require("../../network/response");
const store = require("./store");

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

router.post("/create", async (req, res, next) => {
  const { name, address, email, phone } = req.body;

  try {
    const shop = await controller.create(name, email, address, phone);
    return response.success(req, res, shop, 201);
  } catch (error) {
    console.log(error);
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
  const { name, email, address } = req.body;

  try {
    const shopId = await controller.update(id, name, email, address);
    return response.success(req, res, shopId, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/ispromo/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;

  try {
    const isPromo = await controller.getPromo(shopId);
    return response.success(req, res, isPromo, 200);
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

router.get("/ishot/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const isHot = await controller.getHot(shopId);
    return response.success(req, res, isHot, 200);
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

router.get("/isopen/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const isOpen = await controller.getOpen(shopId);
    return response.success(req, res, isOpen, 200);
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

router.get("/avgprice/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const menu = await controller.avg(shopId);
    return response.success(req, res, menu, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.get("/famous/:shopId", async (req, res, next) => {
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

router.get("/code/:shopId", async (req, res, next) => {
  try {
    const { shopId } = req.params;
    const code = await controller.getCode(shopId);
    return response.success(req, res, code, 200);
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

router.get("/avgtime/:shopId", async (req, res, next) => {
  const { shopId } = req.params;

  try {
    const avgTime = await controller.getAvgTime(shopId);
    return response.success(req, res, avgTime, 200);
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

router.get("/rating/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const rating = await controller.getRating(shopId);
    return response.success(req, res, rating, 200);
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

router.get("/shipping/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const shipping = await controller.getShipping(shopId);
    return response.success(req, res, shipping, 200);
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

router.get("/highlight/:shopId", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const highLight = await controller.getHighLight(shopId);
    return response.success(req, res, highLight, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

module.exports = router;
