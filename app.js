const express = require("express");
const cors = require("cors");
const userRoutes = require("./components/User/routes");
const shopRoutes = require("./components/Shop/routes");
const restaurantRoutes = require("./components/restaurant/routes");
const connectDB = require("./db");
const getURI = require("./db/uri");
const compression = require("compression");
const MONGO_URI = getURI();
connectDB(MONGO_URI);

const app = express();

// Middlewares
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
require("./services/Auth/index");

//Routes
app.use("/api/users", userRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/restaurants", restaurantRoutes); // Aqui va el archivo de rutas;



module.exports = app;
