const Shop = require("./model");

const createShop = (
  name,
  email,
  address,
  phone,
  openNow = false,
  hot = false,
  promo = false,
  avgPrice = 0,
  rating = 0,
  freeShipping = false,
  highLight = false,
  avgTime = 0,
  code,
  schedule = {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
  }
) => {
  try {
    const newShop = new Shop();
    newShop.name = name;
    newShop.email = email;
    newShop.address = address;
    newShop.phone = phone;
    newShop.openNow = openNow;
    newShop.hot = hot;
    newShop.promo = promo;
    newShop.avgPrice = avgPrice;
    newShop.schedule = schedule;
    newShop.rating = rating;
    newShop.freeShipping = freeShipping;
    newShop.highLight = highLight;
    newShop.avgTime = avgTime;
    newShop.code = code;
    newShop.save({ new: true });
    return newShop;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const deleteShop = async (id) => {
  try {
    const deletedId = Shop.findOneAndDelete({ _id: id }, { new: true });
    return deletedId;
  } catch (error) {
    return error;
  }
};

const getShop = async (id) => {
  try {
    const shop = await Shop.findById(id).exec();
    return shop;
  } catch (error) {
    return error;
  }
};

const getShops = async () => {
  try {
    const shops = await Shop.find({});
    return shops;
  } catch (error) {
    return error;
  }
};

const updateShop = async (id, name, email, address) => {
  try {
    const shopId = Shop.findByIdAndUpdate(
      id,
      {
        name,
        email,
        address,
      },
      { new: true }
    ).exec();

    return shopId;
  } catch (error) {
    return error;
  }
};

const getPromo = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop.promo;
  } catch (error) {
    return error;
  }
};

const setPromo = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.promo = !shop.promo;
  } catch (error) {
    return error;
  }
};

const getHot = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop.hot;
  } catch (error) {
    return error;
  }
};

const setHot = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.hot = !shop.hot;
    shop.save();
    return shop;
  } catch (error) {
    return error;
  }
};

const getOpenNow = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop.openNow;
  } catch (error) {
    return error;
  }
};

const setOpenNow = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.openNow = !shop.openNow;
    shop.save();
    return shop;
  } catch (error) {
    return error;
  }
};

const avgPrice = async (shopId) => {
  try {
    const { menu } = await Shop.findById(shopId, { new: true });
    let allPricesSum = 0;
    //Sum every price in the menu
    menu.forEach((comida) => {
      allPricesSum += comida.price;
    });
    // Divide them in the menu length
    const avgPrice = Math.floor(allPricesSum / menu.length);
    return avgPrice;
  } catch (error) {
    return error;
  }
};

const mostFamous = async () => {
  try {
    const shops = await Shop.find({});
    let starsAndName = [];
    shops.forEach((element) => {
      starsAndName.push({
        name: element.name,
        stars: element.stars,
      });
    });
    return starsAndName;
  } catch (error) {
    return error;
  }
};

const setCode = async (shopId, code) => {
  try {
    const shop = await Shop.findById(shopId, { new: true });
    shop.code = code;
    shop.save();
    return shop.code;
  } catch (error) {
    return error;
  }
};

const getCode = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop.code;
  } catch (error) {
    return error;
  }
};

const setAvgTime = async (shopId, avgTime) => {
  try {
    const shop = await Shop.findById(shopId, { new: true });
    shop.avgTime = avgTime;
    shop.save();
    return shop.avgTime;
  } catch (error) {
    return error;
  }
};

const getAvgTime = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop.avgTime;
  } catch (error) {
    return error;
  }
};

const setRating = async (shopId, rating) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.rating = rating;
    shop.save();
    return shop.rating;
  } catch (error) {
    return error;
  }
};

const getRating = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop.rating;
  } catch (error) {
    return error;
  }
};

const setShipping = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.freeShipping = !shop.freeShipping;
    return shop.freeShipping;
  } catch (error) {
    return error;
  }
};
const getShipping = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop.freeShipping;
  } catch (error) {
    return error;
  }
};

const setHighLight = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.highLight = !shop.highLight;
    shop.save();
    return shop.highLight;
  } catch (error) {
    return error;
  }
};

const getHighLight = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    return shop.highLight;
  } catch (error) {
    return error;
  }
};

module.exports = {
  create: createShop,
  delete: deleteShop,
  get: getShop,
  getAll: getShops,
  update: updateShop,
  avg: avgPrice,
  famous: mostFamous,
  setOpen: setOpenNow,
  getOpen: getOpenNow,
  setHot,
  getHot,
  setPromo,
  getPromo,
  setCode,
  getCode,
  setAvg: setAvgTime,
  getAvg: getAvgTime,
  setRating,
  getRating,
  setShipping,
  getShipping,
  setHighLight,
  getHighLight,
};
