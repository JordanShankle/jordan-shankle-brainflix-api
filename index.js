// initialize Express
const express = require('express');
const app = express();
// still need to initialize fs

// Import uuid
const { v4 } = require("uuid");

const PORT = process.argv[2] || 8080;



app
    .route("/video")
    .get((req, res) => {
        res.send(('Here is your video.'));
    })

// Have to .listen to get the Server running
app.listen(PORT, () => {
    console.log('This Server is running on port:', PORT)
})








