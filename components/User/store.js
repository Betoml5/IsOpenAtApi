const User = require("./model");

const getUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    return error;
  }
};

const getUsers = async () => {
  try {
    const users = await User.find({});
    return users;
  } catch (error) {
    return error;
  }
};

const createUser = async (username, email, password) => {
  try {
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.image = "";
    newUser.save({ new: true });
    return newUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    const userId = await User.findByIdAndDelete(id, { new: true });
    return userId;
  } catch (error) {
    return error;
  }
};

const addFavorite = async (id, shop) => {
  try {
    const user = await User.findById(id);
    user.favorites.push(shop);
    user.save({ new: true });
    return user;
  } catch (error) {
    return error;
  }
};

const removeFavorite = async (id, shopId) => {
  try {
    const user = await User.findById(id);
    const shopIndex = user.favorites.indexOf(shopId);
    user.favorites.splice(shopIndex, 1);
    user.save({ new: true });
  } catch (error) {
    return error;
  }
};

const getFavorites = async (id) => {
  try {
    const user = await User.findById(id);
    return user.favorites;
  } catch (error) {
    return error;
  }
};

const setImage = async (id, imageUrl) => {
  try {
    const user = await User.findById(id);
    user.image = imageUrl;
    user.save();
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAll: getUsers,
  get: getUser,
  create: createUser,
  delete: deleteUser,
  addFav: addFavorite,
  removeFav: removeFavorite,
  getFav: getFavorites,
  setImage,
};
