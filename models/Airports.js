//1.IMPORTACIONES
const mongoose = require("mongoose");

//2.SCHEMA
const airportSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

//3.MODELO
const Airport = mongoose.model("Airport", airportSchema);

//4.EXPORTACION
module.exports = Airport;
