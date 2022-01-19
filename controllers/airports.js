const { default: axios } = require("axios");

const getAirports = async (req, res) => {
  const headers = {
    "x-apikey": `${process.env.APP_APIKEY}`,
  };
  const apiRes = await axios.get(
    "https://aeroapi.flightaware.com/aeroapi/airports",
    {
      headers,
    }
  );

  console.log(apiRes.data);

  res.status(500).json(apiRes.data);
};

module.exports = {
  getAirports,
};
