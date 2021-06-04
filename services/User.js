const mongoose = require("mongoose");
const User = require("../models/User");
const { config } = require("../config");
const passport = require("passport");

const USER = encodeURIComponent(config.dbUser); //Esto es para los caracteres especiales.
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

// const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;
const MONGO_URI = `mongodb+srv://IsOpenAtAdmin:${PASSWORD}@isopenat.gkqm7.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
class UserService {
  constructor() {
    this.client = mongoose;
    this.client.set("useNewUrlParser", true);
    this.client.set("useFindAndModify", false);
    this.client.set("useCreateIndex", true);
    this.client.set("useUnifiedTopology", true);
    this.client.connect(MONGO_URI);
  }

  async getUserByUserNameAndPassword(userName, password) {
    try {
      const user = await User.findOne({ userName, password }).exec();
      if (!user) throw new Error("Not user found");
      return user;
    } catch (error) {
      return error;
    }
  }
  async getUserById(id) {
    try {
      const user = await User.findById(id).exec();
      return user;
    } catch (error) {
      return error;
    }
  }
  async getUsers() {
    //Aqui decimos, haz una busqueda, y como no pasamos ningun parametro, encuentra a todos los usuraios
    try {
      const users = await User.find({}).exec();
      return users;
    } catch (error) {
      return error;
    }
  }

  async createUser(username, email, password) {
    try {
      const newUser = new User();
      newUser.username = username;
      newUser.email = email;
      newUser.password = password;
      newUser.save().catch((err) => console.log(err));
      return newUser;
    } catch (error) {
      return error;
    }
  }

  async deleteUserById(id) {
    try {
      const userId = await User.findByIdAndDelete(id).exec();
      return userId;
    } catch (error) {
      return error;
    }
  }
}

module.exports = UserService;
