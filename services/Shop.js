const mongoose = require("mongoose");
const { config } = require("../config");
const Shop = require("../models/Shop");
const USER = encodeURIComponent(config.dbUser); //Esto es para los caracteres especiales.
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://IsOpenAtAdmin:${PASSWORD}@isopenat.gkqm7.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

class ShopService {
  constructor() {
    this.client = mongoose;
    this.client.set("useNewUrlParser", true);
    this.client.set("useFindAndModify", false);
    this.client.set("useCreateIndex", true);
    this.client.set("useUnifiedTopology", true);
    this.client.connect(MONGO_URI);
  }

  async create(
    name,
    email,
    address,
    phone,
    openNow = false,
    hot = false,
    promo = false,
    stars = 0,
    avgPrice = 0,
    schedule = {
      moday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      sunday: "",
    }
  ) {
    const newShop = new Shop();

    newShop.name = name;
    newShop.email = email;
    newShop.address = address;
    newShop.phone = phone;
    newShop.openNow = openNow;
    newShop.hot = hot;
    newShop.promo = promo;
    newShop.stars = stars;
    newShop.avgPrice = avgPrice;
    newShop.schedule = schedule;

    newShop.save().catch((err) => console.log(err));
    return newShop;
  }

  async delete(id) {
    try {
      const deletedId = Shop.findOneAndDelete({ _id: id });
      return deletedId;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const shop = await Shop.findById(id).exec();
      return shop;
    } catch (error) {
      return error;
    }
  }

  async getShops() {
    try {
      const shops = await Shop.find({}).exec();
      return shops;
    } catch (error) {
      return error;
    }
  }

  async update(id, name, email, address) {
    try {
      const shopId = Shop.findByIdAndUpdate(id, {
        name,
        email,
        address,
      }).exec();

      return shopId;
    } catch (error) {
      return error;
    }
  }
}

module.exports = ShopService;
