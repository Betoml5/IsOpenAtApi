const Shop = require("../models/Shop");

class RestaurantService extends Shop {
  constructor() {
    super();
  }

  async addFood(shopId, food) {
    try {
      const newFood = await Shop.findByIdAndUpdate(shopId, {
        $push: { menu: food },
      });

      return newFood;
    } catch (error) {
      return error;
    }
  }

  async removeFood(shopId, foodIndex) {
    try {
      const shop = await Shop.findById(shopId);
      shop.menu.splice(foodIndex, 1);
      shop.save();
      return shop;
    } catch (error) {
      return error;
    }
  }

  async isPromo(shopId, promo) {
    try {
      const shop = Shop.findById(shopId);
      shop.promo = promo;
      shop.save();
      return shop;
    } catch (error) {
      return error;
    }
  }

  async isHot(shopId, isHot) {
    try {
      const shop = await Shop.findById(shopId);
      shop.hot = isHot;
      shop.save();
      return shop;
    } catch (error) {
      return error;
    }
  }
}

module.exports = RestaurantService;
