const store = require("./store");

const createShop = async (
  name,
  email,
  address,
  phone,
  openNow,
  hot,
  promo,
  stars,
  avgPrice,
  schedule
) => {
  const shop = store.create(
    name,
    email,
    address,
    phone,
    openNow,
    hot,
    promo,
    stars,
    avgPrice,
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

const updateShop = async (id, name, email, address) => {
  if (!id || !name || !email || !address)
    return Promise.reject("Invalid ID | Name | Email | Address");
  const shop = store.update(id, name, email, address);
  return shop;
};

const isPromo = async (shopId, promo) => {
  if (!shopId || !promo) return Promise.reject("Invalid ShopId | Promo");
  const shop = await store.promo(shopId, promo);
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

module.exports = {
  create: createShop,
  delete: deleteShop,
  get: getShop,
  getAll: getShops,
  update: updateShop,
  promo: isPromo,
  avg: getAvg,
  famous: famous,
  setOpen: setOpenNow,
  getOpen: getOpenNow,
  setHot,
  getHot,
};
