const store = require("./store");

const addFood = async (shopId, food) => {
  if (!shopId || !food) return Promise.reject("Invalid shopId or Food");
  const newFood = await store.addFood(shopId, food);
  return newFood;
};

const removeFood = async (shopId, foodIndex) => {
  if (!shopId || !foodIndex)
    return Promise.reject("Invalid ShopId or FoodIndex");
  const food = await store.removeFood(shopId, foodIndex);
  return food;
};

const getMenu = async (shopId) => {
  if (!shopId) return Promise.reject("Invalid ShopId");
  const menu = await store.getMenu(shopId);
  return menu;
};

module.exports = {
  add: addFood,
  remove: removeFood,
  menu: getMenu,
};
