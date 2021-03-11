const functions = require('firebase-functions');
const FBAuth = require('./util/fbAuth');
const express = require('express');
const cors = require('cors');
const router = express();

router.use(cors({origin:true}));

// Assignment of handlers to variables
const {verifyCode, signUpUser, signInUser, signOutUser, getUser} = require("./handlers/user-services");
const {userSearch} = require("./handlers/user-search");
const {obtainRealTimeUsers, addMessage, obtainRealTimeConversations} = require("./handlers/message-services");

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

exports.api = functions.https.onRequest(router);
