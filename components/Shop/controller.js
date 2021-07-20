const store = require("./store");

const createShop = async (
  name,
  email,
  address,
  openNow,
  avgPrice,
  rating,
  code,
  avgTime,
  freeShipping,
  highLight,
  menu,
  reviews,
  schedule
) => {
  const shop = store.create(
    name,
    email,
    address,
    openNow,
    avgPrice,
    rating,
    code,
    avgTime,
    freeShipping,
    highLight,
    menu,
    reviews,
    schedule
  );
  return shop;
};

const deleteShop = async (id) => {
  if (!id) return Promise.reject("Invalid Id");
  const shop = store.delete(id);
  return shop;
};

const getShop = async (id) => {
  if (!id) return Promise.reject("Invalid Id");
  const shop = await store.get(id);
  return shop;
};

const getShops = async () => {
  const shops = await store.getAll();
  return shops;
};

const getShopByName = async (name) => {
  if (!name) return Promise.reject("Need name");
  const shops = await store.getShopByName(name);
  return shops;
};

const getMostExpensiveShops = async () => {
  const shops = await store.getMostExpensiveShops();
  return shops;
};

const getCheaperShops = async () => {
  const shops = await store.getCheaperShops();
  return shops;
};

const updateShop = async (id, name, email, address) => {
  if (!id || !name || !email || !address)
    return Promise.reject("Invalid ID | Name | Email | Address");
  const shop = store.update(id, name, email, address);
  return shop;
};

const setAvgPrice = async (shopId, avgPrice) => {
  if (!shopId || !avgPrice) return Promise.reject("Need ShopId | avgPrice");
  const shop = await store.setAvgPrice(shopId, avgPrice);
  return shop;
};

const setPromo = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const shop = await store.setPromo(shopId);
  return shop;
};

const setHot = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const shop = await store.setHot(shopId);
  return shop;
};

const setOpenNow = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const shop = await store.setOpen(shopId);
  return shop;
};

const famous = async () => {
  const shops = await store.famous();
  return shops;
};

const setCode = async (shopId, code) => {
  const shop = await store.setCode(shopId, code);
  return shop;
};

const setAvgTime = async (shopId, avgTime) => {
  const shop = await store.setAvg(shopId, avgTime);
  return shop;
};

const setRating = async (shopId, rating) => {
  const shop = await store.setRating(shopId, rating);
  return shop;
};

const setShipping = async (shopId) => {
  const shop = await store.setShipping(shopId);
  return shop;
};

const setHighLight = async (shopId) => {
  const setHigh = await store.setHighLight(shopId);
  return setHigh;
};

const setReview = async (shopId, review) => {
  const shop = await store.setReview(shopId, review);
  return shop;
};

module.exports = {
  create: createShop,
  delete: deleteShop,
  get: getShop,
  getAll: getShops,
  update: updateShop,
  famous: famous,
  setOpen: setOpenNow,
  setHot,
  setPromo,
  setCode,
  setAvgTime,
  setRating,
  setShipping,
  setHighLight,
  setReview,
  getShopByName,
  getMostExpensiveShops,
  getCheaperShops,
  setAvgPrice,
};
