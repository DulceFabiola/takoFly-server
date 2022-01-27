const express = require("express");
const router = express.Router();
const { getAllAirports } = require("../controllers/airportController");

router.get("/readall", getAllAirports);

module.exports = router;
