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
  schedule: Object,
  hot: Boolean,
  promo: Boolean,
  phone: String,
  reviews: [
    {
      name: String,
      text: String,
      email: String,
    },
  ],
  imageCover: String,
  imagesMenu: [],
  location: []

});

module.exports = model("Shop", ShopModelSchema);
