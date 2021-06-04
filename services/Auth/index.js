const UserService = require("../User");
const { config } = require("../../config");

const bcrypt = require("bcrypt");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User = require("../../models/User");

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        console.log(user);
        if (!user) {
          return done(null, false, { message: "Not user found" });
        }

        const validate = await bcrypt.compare(password, user.password);
        // console.log(validate);
        if (!validate) {
          return done(null, false, { message: "Wrong password" });
        }

        return done(null, user, { message: "Login successfully" });
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Con este middleware, vamos a verificar el token en cada peticion.
// Tenemos que ponerlo en cada ruta, para valdiar
passport.use(
  new JWTStrategy({secretOrKey: config.authJwtSecret,jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),},
    (token, done) => {
      try {
        if (!token) {
          return done(null, "Token required");
        }
        console.log("VALIDANDO TOKEN...");
        return done(null, token);
      } catch (e) {
        done(e);
      }
    }
  )
);
