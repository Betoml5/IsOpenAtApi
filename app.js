const express = require("express");
const cors = require('cors');
const app = express();

// Archivos de rutas

const user_routes = require("./routes/user");

// Middlewares

app.use(cors());
    
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Routes
app.use("/api/users", user_routes); // Aqui va el archivo de rutas;


module.exports = app;
