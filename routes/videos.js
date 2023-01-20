// initialize Express
const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuid } = require("uuid");
const videos = require("../data/videos.json");

////////////////////////////////


// GET All Videos response
router
    .route("/")
    .get((req, res) => {
    const videos = getVideos();
    res.json(videos);
});




// GET video ID response
router
    .route("/:id")
    .get((req, res, next) => {
    
    const videos = getVideos();
    const selectedVideoId = req.params.id;
    
    
    if (selectedVideoId) {
        const findVideo = videos.find((video) => video.id === selectedVideoId);
        res.json(findVideo);
    } else {
        res.json(videos);
    }
    
    next();
});




// POST Response
router
    .post("/", (req, res) => {

        const videos = getVideos();
        const title = req.body.tile;
        const description = req.body.description;


        if (!title || !description) {
            return res.status(400).send('Please provide information.');
        } else {
            const newVideo = {
                id: uuid(),
                title: title,
                channel: "Jordan",
                image: "http://localhost:8080/",
                description: description,
                views: 9876543,
                likes: 123456,
                duration: "1:23",
                video: "",
                timestamp: Date.now(),
                comments: [
                    {
                        id: uuid(),
                        name: "Lindsey",
                        comment: "What a video!",
                        likes: 606,
                        timestamp: Date.now(),
                    },
                    {
                        id: uuid(),
                        name: "Trey",
                        comment: "Wow.. This is amazing!",
                        likes: 722,
                        timestamp: Date.now(),
                    },
                    {
                        id: uuid(),
                        name: "Devon",
                        comment: "Why would you post this video?",
                        likes: 722,
                        timestamp: Date.now(),
                    }
                ]
            }

            videos.push(newVideo);
        }
        

        // Error handling
        fs.writeFile("./data/videos.json", JSON.stringify(videos), (error) => {
            if (error) {
                return res.status(500).json({
                    error: true,
                    message: "There was an error saving the posted video, please try again.",
                });
            }

            res.status(201).json(newVideo);
        });

    });



function getVideos() {
    const videosFromFile = fs.readFileSync("./data/videos.json");
    return JSON.parse(videosFromFile);
}


module.exports = router;