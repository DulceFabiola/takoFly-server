//IMPORTACIONES
const Flight = require("./../models/Flight");

//lEER AEROPUERTOS
exports.getAllAirports = async (req, res) => {
  try {
    const airports = await Flight.find({});
    res.json({
      msg: "Vuelos obtenidos con éxito",
      data: airports,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
      error: error,
    });
  }
};
