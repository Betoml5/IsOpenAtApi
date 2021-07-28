const store = require("./store");

const getUser = (id) => {
  if (!id) return Promise.reject("Invalid ID");
  const user = store.get(id);
  return user;
};

const getUsers = () => {
  const users = store.getAll();
  return users;
};

const createUser = (username, email, password) => {
  if (!username || !email || !password)
    return Promise.reject("Invalid username | Email | Password");
  const user = store.create(username, email, password);
  return user;
};

const deleteUser = (id) => {
  if (!id) return Promise.reject("Invalid ID");
  const user = store.delete(id);
  return user;
};

const addFavorite = (id, shop) => {
  if (!id || !shop) return Promise.reject("Invalid ID | Shop");
  const user = store.addFav(id, shop);
  return user;
};

const removeFavorite = (id, shopId) => {
  if (!id || !shopId) return Promise.reject("Invalid ID | ShopId");
  const user = store.removeFav(id, shopId);
  return user;
};

const getFavorites = (id) => {
  if (!id) return Promise.reject("Invalid ID");
  const favorites = store.getFavorites(id)
  return favorites;
};

const setImage = (id, imageUrl) => {
  if (!imageUrl) return Promise.reject("Need imageURL");
  const user = store.setImage(id, imageUrl);
  return user;
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  addFavorite,
  getFavorites,
  removeFavorite,
  setImage,
};
