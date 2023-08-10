import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [load, setLoad] = useState(true);
  const [cords, setCords] = useState({});
  const [flag, setFlag] = useState(true);
  let lat, log;

  if (flag) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      log = position.coords.longitude;
      setCords({ lat: lat, log: log });
    });
    setFlag(false);
  }
  console.log(cords);

  const getWeather = async (cords) => {
    const data = await axios.post(
      "https://docker-app-8prqz.ondigitalocean.app/server/api/v1/weather",
      { lat: cords.lat, log: cords.log },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data) {
      setLoad(false);
    }
    setWeather(Math.floor(data.data.data));
  };

  useEffect(() => {
    getWeather(cords);
  }, [cords]);

  console.log(weather);
  return (
    <div className="container">
      <div className="card">
        <h2>
          {load ? (
            <h2>Fetching weather for your location!!!</h2>
          ) : (
            <h4>Weather in Mangalore: {weather}c</h4>
          )}
        </h2>
      </div>
    </div>
  );
}
