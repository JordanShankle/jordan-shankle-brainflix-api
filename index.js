// initialize Express
const express = require('express');
const app = express();

// .env
require("dotenv").config("./routes/videos.js")

// Initialize fs
const fs = require('fs');

// Import uuid
const { v4 } = require("uuid");

// PORT from .env
const PORT = process.env.PORT;

// CORS
const cors = require("cors");
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }))

// To parse & stringify JSON
app.use(express.json());

// app.use("/videos", videosRoute);
// app.use("/videos/:videosId", commentsRoute);






app
    .route("/video")
    .get((req, res) => {
        res.send(('Here is your video.'));
    })

    
    
    
// Function that reads the initial JSON file & parses the data
function getVideos() {
    const videosFromFile = fs.readFileSync("./data/videos.json");
    return JSON.parse(videosFromFile);
}
    
    
// Have to .listen to get the Server running
app.listen(PORT, () => {
    console.log('This server is running on port:', PORT)
    console.log('Press CTRL + C to stop the Server')
})