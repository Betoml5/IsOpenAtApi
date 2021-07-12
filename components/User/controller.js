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

const removeFavorite = (id, shopIndex) => {
  if (!id || !shopIndex) return Promise.reject("Invalid ID | ShopIndex");
  const user = store.removeFav(id, shopIndex);
  user.favorites.splice(shopIndex, 1);
  return user;
};

const getFavorites = (id) => {
  if (!id) return Promise.reject("Invalid ID");
  const favorite = store.getFav(id);
  return favorite;
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
