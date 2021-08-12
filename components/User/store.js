const User = require("./model");

const getUser = async (id) => {
  try {
    //With -password with avoid getting the password 
    const user = await User.findById(id)
      .populate('favorites')
      .populate('shops')
      .select('-password')
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
    newUser.admin = false;
    newUser.owner = false
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

const addShop = async (id, shopId) => {
  try {
    const user = await User.findById(id);
    user.shops.push(shopId);
    user.save({ new: true });
    return user;
  } catch (error) {
    return error;
  }
}

const removeShop = async (id, shopId) => {
  try {
    const user = await User.findById(id);
    const shopIndex = user.favorites.indexOf(shopId);
    user.shops.splice(shopIndex, 1);
    user.save({ new: true });
    return user;
  } catch (error) {
    return error;
  }
};


const getFavorites = async (id) => {
  try {
    const user = await User.find({ _id: id })
      .populate('favorites')

    return user[0].favorites
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getRandomFavorite = async (id) => {
  try {
    const user = await User.findById(id).populate("favorites");
    if (user.favorites.length > 0) {
      const randomShop = Math.floor(
        Math.random() * (user?.favorites?.length - 0) + 0
      );
      return user.favorites[randomShop];
    } else {
      return [];
    }
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
  getFavorites,
  setImage,
  getRandomFavorite,
  addShop,
  removeShop

};
