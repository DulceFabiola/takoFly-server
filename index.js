const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/airports", require("./routes/airports.js"));
//4. SERVER
app.listen(process.env.PORT, () => {
  console.log(
    `Servidor corriendo en el puerto http://localhost:${process.env.PORT}`
  );
});
