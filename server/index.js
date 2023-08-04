const keys = require("./keys");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const redis = require("redis");
const app = express();
const weather = require("./weather");
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/api/v1/weather", async (req, res) => {
  if (!req.body.lat && !req.body.log) {
    res.status(500).json({ error: "Co-ordicates not received" });
  }
  const data = await weather.getWeather(req.body.lat, req.body.log);
  console.log(data);

  res.json({ data: data });
});

app.listen(8000, (err) => {
  console.log("listen on port 8000");
});
