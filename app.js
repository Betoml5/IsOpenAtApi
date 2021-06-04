const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/User");
const shopRoutes = require("./routes/Shop");
const restaurantRoutes = require("./routes/Restaurant");

// Archivos de rutas

// const user_routes = require("./routes/user");

// Middlewares

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require("./services/Auth/index");

//Routes
app.use("/api/users", userRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/restaurants", restaurantRoutes); // Aqui va el archivo de rutas;

module.exports = app;
