const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/time", async (req, res) => {
  const data = await axios.get(
    "https://worldtimeapi.org/api/timezone/Asia/Tehran"
  );
  res.json(data.data);
});

app.get("/earthquakes", async (req, res) => {
  const data = await axios.get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"
  );
  res.json(data.data);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
