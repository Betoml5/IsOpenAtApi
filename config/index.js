const dotenv = require("dotenv");
dotenv.config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  JwtAlgorithm: process.env.JWT_ALGORITHM,
  JwtLifetime: process.env.JWT_LIFETIME,
};

module.exports = { config };
