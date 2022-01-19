const express = require("express");
const router = express.Router();
const airports = require("../controllers/airports");

router.get("/", airports.getAirports);

module.exports = router;
