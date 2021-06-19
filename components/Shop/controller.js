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
  const shop = store.delete(id);
  return shop;
};

const getShop = async (id) => {
  const shop = store.get(id);
  return shop;
};

const getShops = async () => {
  const shops = store.getAll();
  return shops;
};

const updateShop = async (id, name, email, address) => {
  const shop = store.update(id, name, email, address);
  return shop;
};

const isPromo = async (shopId, promo) => {
  const shop = await store.promo(shopId, promo);
  return shop;
};

const isHot = async (shopId, hot) => {
  const shop = await store.hot(shopId, promo);
  return shop;
};

const openNow = async (shopId, openNow) => {
  const shop = await store.openNow();
  return shop;
};

const getAvg = async (shopId) => {
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
  hot: isHot,
  openNow,
  avg: getAvg,
  famous: famous,
};
