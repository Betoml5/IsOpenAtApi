const Restaurant = require("../Shop/model");

const addFood = async (shopId, food) => {
  try {
    const newFood = await Restaurant.findByIdAndUpdate(
      shopId,
      {
        $push: { menu: food },
      },
      { new: true }
    );
    return newFood;
  } catch (error) {
    return error;
  }
};

const removeFood = async (shopId, foodIndex) => {
  try {
    const restaurant = await Restaurant.findById(shopId);
    restaurant.menu.splice(foodIndex, 1);
    restaurant.save();
    return shop;
  } catch (error) {
    return error;
  }
};

const getMenu = async (shopId) => {
  try {
    const restaurant = await Restaurant.findById(shopId);
    return restaurant.menu;
  } catch (error) {
    return error;
  }
};

module.exports = {
  addFood,
  removeFood,
  getMenu,
};
