const express = require("express");
const router = express.Router();
const {
  getAllFlights,
  getOneFlight,
} = require("../controllers/flightController");

//lEER VUELOS
router.get("/readall", getAllFlights);

//LEER UN VUELO
router.get("/readone/:id", getOneFlight);

module.exports = router;
