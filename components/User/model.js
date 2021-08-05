const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const UserModelSchema = new Schema({
  username: { type: String },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, required: true },
  favorites: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
  image: String,
  admin: Boolean,
});

//Aqui lo que hacemos es que antes de que se guarde el usuario, vamos a encriptar la constraseña
// OJO SI USAMOS ARROW FUNCTIONS, VAMOS A TENER PROBLEMAS CON THIS.
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
  password
) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserModelSchema);
