const express = require("express");
const cors = require("cors");
const app = express();
const UserService = require("./services/User");

// Archivos de rutas

// const user_routes = require("./routes/user");

// Middlewares

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/hola", (req, res) => {
  const User = new UserService();

  res.status(200).send("Hola");
});

//Routes
// app.use("/api/users", user_routes); // Aqui va el archivo de rutas;

module.exports = app;
