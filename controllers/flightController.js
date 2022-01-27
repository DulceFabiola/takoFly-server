//IMPORTACIONES
const Flight = require("./../models/Flight");

//lEER AEROPUERTOS
exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find({});
    res.json({
      msg: "Vuelos obtenidos con éxito",
      data: flights,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos",
      error: error,
    });
  }
};
