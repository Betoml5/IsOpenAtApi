const Shop = require("../models/Shop");

class RestaurantService extends Shop {
  constructor() {
    super();
  }

  async addFood(id, food) {
    try {
      const newFood = await Shop.findByIdAndUpdate(id, {
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

  async addPromo(promo){
      try {
          
      } catch (error) {
          
      }
  }

}

module.exports = RestaurantService;
