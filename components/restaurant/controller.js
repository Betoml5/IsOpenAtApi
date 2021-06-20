const store = require("./store");

const addFood = async (shopId, food) => {
  const food = await store.addFood(shopId, food);
  return food;
};

const removeFood = async (shopId, foodIndex) => {
  const food = await store.removeFood(shopId, foodIndex);
  return food;
};

const getMenu = async (shopId) => {
  const menu = await store.getMenu(shopId);
  return menu;
};

module.exports = {
  add: addFood,
  remove: removeFood,
  menu: getMenu,
};
