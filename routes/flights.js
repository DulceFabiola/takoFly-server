const express = require("express");
const router = express.Router();
const { getAllFlights } = require("../controllers/flightController");

router.get("/readall", getAllFlights);

module.exports = router;
