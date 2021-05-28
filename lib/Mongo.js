const mongoose = require("mongoose");

class MongoLib {
  constructor() {
    this.client = new mongoose.connection();
  }

  getUser() {
    this.client;
  }
}
