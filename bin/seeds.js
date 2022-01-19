//IMPORTACIONES
const mongoose = require("mongoose");
const Fligth = require("./../models/Flight");

require("dotenv").config();

//CONEXION A BD
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//DATOS A POBLAR
const dataFligth = [
  {
    origin: "Acapulco",
    destiny: "Ciudad de México",
    start: "8:35 AM",
    end: "9:40 AM",
    price: 1100,
    seats: 180,
  },
  {
    origin: "Acapulco",
    destiny: "Ciudad de México",
    start: "10:00 AM",
    end: "11:10 AM",
    price: 1100,
    seats: 180,
  },
  {
    origin: "Ciudad de México",
    destiny: "Acapulco",
    start: "2:00 PM",
    end: "3:10 PM",
    price: 1100,
    seats: 180,
  },
  {
    origin: "Ciudad de México",
    destiny: "Acapulco",
    start: "8:00 PM",
    end: "9:10 PM",
    price: 1100,
    seats: 180,
  },
  {
    origin: "Ciudad de México",
    destiny: "Cancún",
    start: "11:20 PM",
    end: "2:15 AM",
    price: 2900,
    seats: 180,
  },
  {
    origin: "Ciudad de México",
    destiny: "Cancún",
    start: "5:55 AM",
    end: "9:00 AM",
    price: 2900,
    seats: 180,
  },
];

//DECLARAR FUNCIÓN
const createFlight = async () => {
  const newDataFlight = await Fligth.create(dataFligth);
  console.log(newDataFlight);
  mongoose.connection.close();
};

//INVOCACIÓN
createFlight();
