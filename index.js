
const express = require('express');
const app = express();
require("dotenv").config("./routes/videos.js")
const fs = require('fs');
// const { v4: uuid  } = require("uuid");
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors({ origin: process.env.ALLOWED_ORIGIN }))
app.use(express.json());





const videoRoutes = require('./routes/videos')
app.use("/videos", videoRoutes);
// app.use("/videos/:videosId", commentsRoute);


    
// Function that reads the initial JSON file & parses the data
function getVideos() {
    const videosFromFile = fs.readFileSync("./data/videos.json");
    return JSON.parse(videosFromFile);
}
    
    
// Have to .listen to get the Server running
app.listen(PORT, () => {
    console.log('This server is running on port:', PORT)
    console.log('Press CTRL + C to stop the Server')
});