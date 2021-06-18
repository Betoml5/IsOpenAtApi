
const getUser = async (id) => {
    const user = await User.findById(id);
    return user;
}

const getUsers = async () => {
    const users = await User.find({});
    return users;
}

const createUser = async (username, email, password) => {
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.save({ new: true });
    return newUser;
}

const deleteUser = async (id) => {
    const userId = await User.findByIdAndDelete(id, { new: true })
    return userId;
}

const addFavorite = async (id, shop) => {
    const user = await User.findById(id);
    user.favorites.push(shop);
    user.save({ new: true });
    return user;
}

const removeFavorite = async (id, shopIndex) => {
    const user = await User.findById(id);
    user.favorites.splice(shopIndex, 1);
    user.save({ new: true })
}

const getFavorites = async (id) => {
    const user = await User.find(id);
    return user.favorites;
}

module.exports = {
    getUser, getUsers, createUser, deleteUser, addFavorite,
    removeFavorite, getFavorites,
}