//1.IMPORTACIONES
const mongoose = require("mongoose");

//2.SCHEMA
const flightSchema = mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destiny: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  airportCode: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  descripcion: String,
});

//3.MODELO
const Flight = mongoose.model("Flight", flightSchema);

//4.EXPORTACION
module.exports = Flight;
