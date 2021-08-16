const Shop = require("./model");

const createShop = (
  name,
  address,
  phone,
  location,
  openNow = false,
  hot = false,
  promo = false,
  avgPrice = 0,
  rating = 0,
  freeShipping = false,
  highLight = false,
  avgTime = 0,
  code = "",
  reviews = [],
  imageCover = "",
  imagesMenu = [],

  schedule = [
    {
      day: "Lunes",
      open: false,
      range: [],
    },
    {
      day: "Martes",
      open: false,
      range: [],
    },
    {
      day: "Miercoles",
      open: false,
      range: [],
    },
    {
      day: "Jueves",
      open: false,
      range: [],
    },
    {
      day: "Viernes",
      open: false,
      range: [],
    },
    {
      day: "Sabado",
      open: false,
      range: [],
    },
    {
      day: "Domingo",
      open: false,
      range: [],
    },
  ]
) => {
  try {
    const newShop = new Shop();
    newShop.name = name;
    // newShop.email = email;
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
    newShop.reviews = reviews;
    newShop.imageCover = imageCover;
    newShop.imagesMenu = imagesMenu;
    newShop.location = location;
    newShop.save({ new: true });
    return newShop;
  } catch (error) {
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
    const shop = await Shop.findById(id);
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

const getShopByName = async (name) => {
  try {
    const shops = await Shop.find({}).exec();
    const filteredShops = shops.filter((shop) =>
      shop.name.toLowerCase().includes(name.toLowerCase())
    );
    return filteredShops;
  } catch (error) {
    return error;
  }
};

const getMostExpensiveShops = async () => {
  try {
    const shops = await Shop.find({}).exec();
    const filteredShops = shops.filter((shop) => shop.avgPrice > 90);
    return filteredShops;
  } catch (error) {
    return error;
  }
};

const getCheaperShops = async () => {
  try {
    const shops = await Shop.find({}).exec();
    const filteredShops = shops.filter((shop) => shop.avgPrice < 80);
    return filteredShops;
  } catch (error) {
    return error;
  }
};

// Insted of using specific params, we pass a hole object of update
// En lugar de pasar parametros especificos, paramos un objeto entero como actualizacion.
const updateShop = async (id, update) => {
  try {
    const shop = await Shop.findByIdAndUpdate(id, update, { new: true });
    return shop;
  } catch (error) {
    return error;
  }
};

const setPromo = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.promo = !shop.promo;
    shop.save();
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

const setAvgPrice = async (shopId, avgPrice) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.avgPrice = shop.avgPrice + avgPrice;
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
    menu.forEach((food) => {
      allPricesSum += food.price;
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
        rating: element.rating,
      });
    });
    return ratingAndName;
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

const setAvgTime = async (shopId, avgTime) => {
  try {
    const shop = await Shop.findById(shopId, { new: true });
    shop.avgTime += avgTime;
    shop.save();
    return shop.avgTime;
  } catch (error) {
    return error;
  }
};

const setRating = async (shopId, rating) => {
  try {
    const shop = await Shop.findById(shopId);
    // const shopRating = shop.rating;
    shop.rating = shop.rating + rating;
    shop.save();
    return shop;
  } catch (error) {
    return error;
  }
};

const setShipping = async (shopId) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.freeShipping = !shop.freeShipping;
    shop.save();
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

const setReview = async (shopId, review) => {
  try {
    const newReview = await Shop.findByIdAndUpdate(
      shopId,
      {
        $push: { reviews: review },
      },
      { new: true }
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

const setImageCover = async (shopId, imageURL) => {
  try {
    const shop = await Shop.findById(shopId);
    shop.imageCover = imageURL;
    shop.save();
    return shop;
  } catch (error) {
    return error;
  }
};

const pushImageMenu = async (shopId, imageURL) => {
  try {
    const shop = await Shop.findByIdAndUpdate(
      shopId,
      {
        $push: { imagesMenu: imageURL },
      },
      { new: true }
    );
    return shop;
  } catch (error) {
    return error;
  }
};

const removeImageMenu = async (shopId, imageURL) => {
  try {
    const shop = await Shop.findById(shopId);
    const imgIndex = await shop.imagesMenu.indexOf(imageURL);
    shop.imagesMenu.splice(imgIndex, 1);
    shop.save({ new: true });
    return shop;
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
  setHot,
  setPromo,
  setCode,
  setAvg: setAvgTime,
  setRating,
  setShipping,
  setHighLight,
  setReview,
  getShopByName,
  getMostExpensiveShops,
  getCheaperShops,
  setAvgPrice,
  setImageCover,
  pushImageMenu,
  removeImageMenu,
};
