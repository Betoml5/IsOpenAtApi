const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser); //Esto es para los caracteres especiales.
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
module.exports = function getUri() {
  const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@isopenat.gkqm7.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
  return MONGO_URI;
};
