const { Schema, model } = require("mongoose");

const ShopModelSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true, lowercase: true },
  address: { type: String },
  menu: [],
  avgPrice: { type: Number },
  code: String,
  avgTime: Number,
  freeShipping: Boolean,
  highLight: Boolean,
  rating: Number,
  openNow: Boolean,
  stars: Number,
  schedule: Object,
  hot: Boolean,
  promo: Boolean,
  phone: String,
});

module.exports = model("Shop", ShopModelSchema);
