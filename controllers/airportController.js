//IMPORTACIONES
const Airports = require("./../models/Airports");

//lEER AEROPUERTOS
exports.getAllAirports = async (req, res) => {
  try {
    const airports = await Airports.find({});
    res.json({
      msg: "Aereopuertos obtenidos con éxito",
      data: airports,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
      error: error,
    });
  }
};
