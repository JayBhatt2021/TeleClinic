const Joi = require('joi');
const {database, admin} = require('../util/admin');
const config = require("../util/config");

const addVideoSchema = Joi.object({
    receiverName: Joi.string().required(),
    videoName: Joi.string().required()
});

const updateVideoFileLocationSchema = Joi.object({
    videoName: Joi.string().required(),
    videoFileUrl: Joi.string().required()
});

const obtainVideosSchema = Joi.object({
    receiverName: Joi.string().required(),
    userType: Joi.string().required()
});

// Adds a video to the videos collection
// REQ: videoName
// RES returns on success: Status 200, 'Video added successfully.'
// RES returns on fail: Status 400, bad request
exports.addVideo = (req, res) => {
    const validation = addVideoSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    function sendResults(message) {
        res.status(200).send(message);
    }

    const receiverName = req.body.receiverName;
    const videoName = req.body.videoName;

    database.collection("videos").doc(videoName)
        .set({
            receiverName: receiverName,
            videoName: videoName,
            videoFileUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/Heart.mp4?alt=media`
        })
        .then(function () {
            const message = {message: "Video added successfully."};
            sendResults(message);
        })
        .catch(err => {
            console.error(err);
        })
};

// Uploads video file to bucket storage
// REQ: Authorization Header: tokenId, videoFile: video file
// RES: 200 status, videoFileUrl
exports.uploadVideoFile = (req, res) => {
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');
    let videoFileUrl;

    const busboy = new BusBoy({headers: req.headers});
    let videoFileName;
    let videoFileToBeUploaded = {};
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        const videoFileExtension = filename.split('.')[filename.split('.').length - 1];
        videoFileName = `${Math.round(Math.random() * 100000000000)}.${videoFileExtension}`;
        const filepath = path.join(os.tmpdir(), videoFileName);
        videoFileToBeUploaded = {filepath, mimetype};
        file.pipe(fs.createWriteStream(filepath));
    });
    busboy.on('finish', () => {
        admin.storage().bucket().upload(videoFileToBeUploaded.filepath, {
            resumable: false,
            metadata: {
                metadata: {
                    contentType: videoFileToBeUploaded.mimetype
                }
            }
        })
            .then(() => {
                videoFileUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${videoFileName}?alt=media`;
                return res.send(videoFileUrl);
            })
            .catch(err => {
                console.error(err);
                return res.status(500).send("Something went wrong.")
            })
    });
    busboy.end(req.rawBody);
};

// Updates the video file location in the database
// REQ: videoName and videoFileUrl
// RES returns on success: Status 200, 'Video location updated successfully.'
// RES returns on fail: Status 400, bad request
exports.updateVideoFileLocation = (req, res) => {
    const validation = updateVideoFileLocationSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    function sendResults(message) {
        res.status(200).send(message);
    }

    const videoName = req.body.videoName;
    const videoFileUrl = req.body.videoFileUrl;

    database.collection("videos").doc(videoName)
        .update({videoFileUrl: videoFileUrl})
        .then(function () {
            const message = {message: "Video location updated successfully."};
            sendResults(message);
        })
        .catch(err => {
            console.error(err);
        })
};

// Obtains some/all videos in the database
// REQ: receiverName, userType
// RES: Some/all of the videos in the videos collection
exports.obtainVideos = (req, res) => {
    const validation = obtainVideosSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    const receiverName = req.body.receiverName;
    const userType = req.body.userType;

    if (userType === "PATIENT_TYPE") {
        database.collection("videos")
            .orderBy("receiverName", "asc")
            .onSnapshot((querySnapshot) => {
                const videosArray = [];
                querySnapshot.forEach(doc => {
                    if (doc.data().receiverName === receiverName) {
                        videosArray.push(doc.data());
                    }
                });
                res.status(200).send(videosArray);
            });
    } else {
        database.collection("videos")
            .onSnapshot((querySnapshot) => {
                const videosArray = [];
                querySnapshot.forEach(function (doc) {
                    videosArray.push(doc.data());
                });
                res.status(200).send(videosArray);
            });
    }
};
