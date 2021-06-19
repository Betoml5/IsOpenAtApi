const store = require("./store");

const getUser = (id) => {
  const user = store.get(id);
  return user;
};

const getUsers = () => {
  const users = store.getAll();
  return users;
};

const createUser = (username, email, password) => {
  const user = store.create(username, email, password);
  return user;
};

const deleteUser = (id) => {
  const user = store.delete(id);
  return user;
};

const addFavorite = (id, shop) => {
  const user = store.addFav(id, shop);
  return user;
};

const removeFavorite = (id, shopIndex) => {
  const user = store.removeFav(id, shopIndex);
  user.favorites.splice(shopIndex, 1);
  user.save({ new: true });
  return user;
};

const getFavorites = (id) => {
  const favorite = store.getFav(id);
  return favorite;
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  addFavorite,
  getFavorites,
  removeFavorite,
};
