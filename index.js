//1. IMPORTACIONES
const express = require("express");
const app = express();
require("dotenv").config();

//2.MIDDLEWARES

//3. RUTAS

//4. SERVER
app.listen(process.env.PORT, () => {
  console.log(
    `Servidor corriendo en el puerto http://localhost:${process.env.PORT}`
  );
});
