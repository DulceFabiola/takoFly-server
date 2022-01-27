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

//LEER UN VUELO
exports.getOneFlight = async (req, res) => {
  const { id } = req.params;
  try {
    const flight = await Flight.findById(id);
    res.json({
      msg: "Vuelo obtenido con éxito",
      data: flight,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Hubo un error obteniendo los datos.",
      error: error,
    });
  }
};
