const app = require("./app");
const { config } = require("./config/index");

const isDev = config.dev;

app.listen(config.port, () => {
  console.log(`Servidor corriendo correctamente en: localhost:${config.port}`);
  isDev && console.log(`Estas en modo  ${config.dev ? "Dev" : "Produccion"}`);
});

