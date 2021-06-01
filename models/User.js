const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const UserModelSchema = new Schema({
  userName: String,
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true },
  favorites: [],
});

UserModelSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});

UserModelSchema.methods.validatePassword = async function validatePassword(
  data
) {
  return bcrypt.compare(data, this.password);
};

module.exports = mongoose.model("User", UserModelSchema);
