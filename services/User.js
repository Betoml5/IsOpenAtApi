const mongoose = require("mongoose");
const User = require("../models/User");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser); //Esto es para los caracteres especiales.
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class UserService {
  constructor() {
    this.client = mongoose;
    this.client.connect(MONGO_URI, { useNewUrlParser: true });
  }

  async getUser({ id }) {
    const user = await User.findById(id).exec();
    return user;
  }
  async createUser(userName, email, password) {
    const newUser = new User();
    newUser.userName = userName;
    newUser.email = email;
    newUser.password = password;
  }
}

module.exports = UserService;
