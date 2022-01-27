//IMPORTACIONES
const mongoose = require("mongoose");
const Flight = require("./../models/Flight");

require("dotenv").config();

//CONEXION A BD
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//DATOS A POBLAR
const dataFlight = [
  {
    origin: "Acapulco",
    destiny: "Ciudad de México",
    start: "8:35 AM",
    end: "9:40 AM",
    price: 1100,
    airportCode: "ACA",
  },
  {
    origin: "Acapulco",
    destiny: "Ciudad de México",
    start: "10:00 AM",
    end: "11:10 AM",
    price: 1100,
    airportCode: "ACA",
  },
  {
    origin: "Ciudad de México",
    destiny: "Acapulco",
    start: "2:00 PM",
    end: "3:10 PM",
    price: 1100,
    airportCode: "CDMX",
  },
  {
    origin: "Ciudad de México",
    destiny: "Acapulco",
    start: "8:00 PM",
    end: "9:10 PM",
    price: 1100,
    airportCode: "CDMX",
  },
  {
    origin: "Ciudad de México",
    destiny: "Cancún",
    start: "11:20 PM",
    end: "2:15 AM",
    price: 2900,
    airportCode: "CDMX",
  },
  {
    origin: "Ciudad de México",
    destiny: "Cancún",
    start: "5:55 AM",
    end: "9:00 AM",
    price: 2900,
    airportCode: "CDMX",
  },
];

//DECLARAR FUNCIÓN
const createFlight = async () => {
  const newDataFlight = await Flight.create(dataFlight);
  console.log(newDataFlight);
  mongoose.connection.close();
};

//INVOCACIÓN
createFlight();
