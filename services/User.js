const mongoose = require("mongoose");
const { config } = require("../config");

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class UserService {
  constructor() {
    this.client = mongoose;
    this.client
      .connect(MONGO_URI, { useNewUrlParser: true })
      .then(() => console.log("Conexion exitosa"))
      .catch(() =>
        console.log("Hubo un error al intentar conectarse con la DB")
      );
  }
}
