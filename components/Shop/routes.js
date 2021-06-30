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
  const { promo } = req.body;
  try {
    const shopUpdate = await controller.promo(shopId, promo);
    return response.success(req, res, shopUpdate, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/ishot/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  const { hot } = req.body;
  try {
    const shopUpdate = await controller.hot(shopId, hot);
    return response.success(req, res, shopUpdate, 200);
  } catch (error) {
    return response.error(req, res, error, 500);
  }
});

router.patch("/isopenow/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  const { openNow } = req.body;

  try {
    const shopUpdate = await controller.openNow(shopId, openNow);
    return response.success(req, res, shopUpdate, 200);
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

router.get("/avg/:shopId?", async (req, res, next) => {
  const { shopId } = req.params;
  try {
    const menu = await controller.avg(shopId);
    return response.success(req, res, menu, 200);
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

module.exports = router;
