const functions = require('firebase-functions');
const FBAuth = require('./util/fbAuth');
const express = require('express');
const cors = require('cors');
const router = express();

router.use(cors({origin: true}));

// Assignment of handlers to variables
const {verifyCode, signUpUser, signInUser, signOutUser, getUser} = require("./handlers/user-services");
const {userSearch} = require("./handlers/user-search");
const {obtainRealTimeUsers, addMessage, obtainRealTimeConversations} = require("./handlers/message-services");
const {
    addReport,
    uploadReportFile,
    updateReportFileLocation,
    obtainReports,
    obtainReportsByUserName
} = require("./handlers/medical-reports-services");
const {
    addAppointment,
    cancelAppointment,
    obtainAppointments,
    obtainAppointmentsByUserName
} = require("./handlers/appointment-request-services");
const {
    addVideo,
    uploadVideoFile,
    updateVideoFileLocation,
    obtainVideos
} = require("./handlers/video-recording-services");

// User Services Routes
router.post("/verify-code", verifyCode);
router.post("/sign-up", signUpUser);
router.post("/sign-in", signInUser);
router.post("/sign-out", FBAuth, signOutUser);
router.post("/get-user", FBAuth, getUser);

// User Search Route
router.post("/user-search", FBAuth, userSearch);

// Message Services Routes
router.post("/obtain-real-time-users", obtainRealTimeUsers);
router.post("/add-message", addMessage);
router.post("/obtain-real-time-conversations", obtainRealTimeConversations);

// Medical Reports Services Routes
router.post("/add-report", addReport);
router.post("/upload-report-file", FBAuth, uploadReportFile);
router.post("/update-report-file-location", updateReportFileLocation);
router.post("/obtain-reports", obtainReports);
router.post("/obtain-reports-by-user-name", obtainReportsByUserName);

// Appointment Request Services Routes
router.post("/add-appointment", addAppointment);
router.post("/cancel-appointment", cancelAppointment);
router.post("/obtain-appointments", obtainAppointments);
router.post("/obtain-appointments-by-user-name", obtainAppointmentsByUserName);

// Video Recording Services Routes
router.post("/add-video", addVideo);
router.post("/upload-video-file", FBAuth, uploadVideoFile);
router.post("/update-video-file-location", updateVideoFileLocation);
router.post("/obtain-videos", obtainVideos);

exports.api = functions.https.onRequest(router);
