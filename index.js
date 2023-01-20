
const express = require('express');
const app = express();
require("dotenv").config("./routes/videos.js")
const fs = require('fs');
// const { v4: uuid  } = require("uuid");
const PORT = process.env.PORT;
const cors = require("cors");
app.use(cors())
app.use(express.json());


// Routes
const videoRoutes = require('./routes/videos')
app.use("/videos", videoRoutes);


// For Images
app.use("/image", express.static("images"));
    
    
    
// Have to .listen to get the Server running
app.listen(PORT, () => {
    console.log('This server is running on port:', PORT)
    console.log('Press CTRL + C to stop the Server')
});