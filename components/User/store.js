const mongoose = require('mongoose');
const User = require('../models/User');
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser); //Esto es para los caracteres especiales.
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@isopenat.gkqm7.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const client = mongoose;
client.set("useNewUrlParser", true);
client.set("useFindAndModify", false);
client.set("useCreateIndex", true);
client.set("useUnifiedTopology", true);
client.connect(MONGO_URI).then((msg) => console.log('Conected to DATABASE!', msg)).catch(e => console.log('An Error has ocurred!', e))




mongoose.connect(MONGO_URI, {})

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