const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Home route
app.get("/", (req, res) => {
    res.send("🌍 Disaster Alert System Running");
});

// Earthquake data route
app.get("/earthquakes", async (req, res) => {
    try {
        const response = await axios.get(
            "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});