const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  userName: String,
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true },
  favorites: [],
});

module.exports = mongoose.model("UserModel", UserModelSchema);
