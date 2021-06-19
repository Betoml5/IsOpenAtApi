const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./components/User/routes");
const shopRoutes = require("./components/Shop/routes");
// const restaurantRoutes = require("./routes/Restaurant");
const connectDB = require("./db");
const getURI = require("./db/uri");
const MONGO_URI = getURI();
connectDB(MONGO_URI);

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require("./services/Auth/index");

//Routes
app.use("/api/users", userRoutes);
app.use("/api/shops", shopRoutes);
// app.use("/api/restaurants", restaurantRoutes); // Aqui va el archivo de rutas;

module.exports = app;
