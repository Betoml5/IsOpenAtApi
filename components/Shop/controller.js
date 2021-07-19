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
  const shop = store.get(id);
  return shop;
};

const getShops = async () => {
  const shops = store.getAll();
  return shops;
};

const getShopByName = async (name) => {
  if (!name) return Promise.reject("Need name");
  const shops = store.getShopByName(name);
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

const getPromo = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const isPromo = await store.getPromo(shopId);
  return isPromo;
};

const setPromo = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const shop = await store.setPromo(shopId);
  return shop;
};

const getHot = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const isHot = await store.getHot(shopId);
  return isHot;
};

const setHot = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const shop = await store.setHot(shopId);
  return shop;
};

const getOpenNow = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const isOpen = await store.getOpen(shopId);
  return isOpen;
};

const setOpenNow = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const shop = await store.setOpen(shopId);
  return shop;
};

const getAvg = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const avg = await store.avg(shopId);
  return avg;
};

const famous = async () => {
  const shops = await store.famous();
  return shops;
};

const setCode = async (shopId, code) => {
  const shop = await store.setCode(shopId, code);
  return shop;
};

const getCode = async (shopId) => {
  const code = await store.getCode(shopId);
  return code;
};

const setAvgTime = async (shopId, avgTime) => {
  const shop = await store.setAvg(shopId, avgTime);
  return shop;
};

const getAvgTime = async (shopId) => {
  const avgTime = await store.getAvg(shopId);
  return avgTime;
};

const setRating = async (shopId, rating) => {
  const shop = await store.setRating(shopId, rating);
  return shop;
};

const getRating = async (shopId) => {
  const rating = await store.getRating(shopId);
  return rating;
};

const setShipping = async (shopId) => {
  const shop = await store.setShipping(shopId);
  return shop;
};

const getShipping = async (shopId) => {
  const shipping = await store.getShipping(shopId);
  return shipping;
};

const setHighLight = async (shopId) => {
  const setHigh = await store.setHighLight(shopId);
  return setHigh;
};

const getHighLight = async (shopId) => {
  const highLight = await store.getHighLight(shopId);
  return highLight;
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
  avg: getAvg,
  famous: famous,
  setOpen: setOpenNow,
  getOpen: getOpenNow,
  setHot,
  getHot,
  setPromo,
  getPromo,
  setCode,
  getCode,
  setAvgTime,
  getAvgTime,
  setRating,
  getRating,
  setShipping,
  getShipping,
  setHighLight,
  getHighLight,
  setReview,
  getShopByName,
  getMostExpensiveShops,
  getCheaperShops,
};
