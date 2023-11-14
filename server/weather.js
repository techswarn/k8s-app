const axios = require("axios");
const keys = require("./keys");
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const getWeather = async (lat, log) => {
  try {
    const res = await axios.post(
      `${baseUrl}?lat=${lat}&lon=${log}&appid=${keys.apiKey}`
    );
    const tempCel = res?.data?.main?.temp - 273.15;
    console.log(`Temperature in mangalore is ${tempCel} c`);
    return tempCel;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getWeather };
