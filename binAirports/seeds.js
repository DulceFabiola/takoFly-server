//IMPORTACIONES
const mongoose = require("mongoose");
const Airports = require("./../models/Airports");

require("dotenv").config();

//CONEXION A BD
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//DATOS A POBLAR
const dataAirports = [
  {
    name: "Acapulco",
    code: "ACA",
  },
  {
    name: "Aguascalientes",
    code: "AGU",
  },
  {
    name: "Cancún",
    code: "CUN",
  },
  {
    name: "Chihuahua",
    code: "CUU",
  },
  {
    name: "Ciudad Juárez",
    code: "CHI",
  },
  {
    name: "Ciudad de México",
    code: "CDMX",
  },
  {
    name: "Guadalajara",
    code: "GDL",
  },
  {
    name: "Tijuana",
    code: "TIJ",
  },
  {
    name: "Monterrey",
    code: "MTY",
  },
  {
    name: "Los Cabos",
    code: "SJD",
  },
  {
    name: "Puebla",
    code: "PBC",
  },
];

//DECLARAR FUNCIÓN
const createAirport = async () => {
  const newDataAirport = await Airports.create(dataAirports);
  console.log(newDataAirport);
  mongoose.connection.close();
};

//INVOCACIÓN
createAirport();
