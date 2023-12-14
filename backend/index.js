const express = require("express");
const axios = require("axios");
require('dotenv').config();
const apiKey = process.env.API_KEY;

const app = express();
const cors = require("cors");
app.use(cors());

const port = 4000;

app.get("/api/top-20", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-11-16",
      {
        params: {
          adjusted: true,
          apiKey: process.env.API_KEY,
        },
      }
    );

    const responseData = response.data;

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
