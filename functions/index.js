const functions = require('firebase-functions');
const FBAuth = require('./util/fbAuth');
const express = require('express');
const cors = require('cors');
const router = express();

router.use(cors({origin:true}));

// Assignment of handlers to variables
const {signUpUser, signInUser, signOutUser, getUser, emailLookup} = require("./handlers/user-services");
const {userSearch} = require("./handlers/user-search");

//User Services Routes
router.post("/sign-up", signUpUser);
router.post("/sign-in", signInUser);
router.post("/sign-out", FBAuth, signOutUser);
router.post("/get-user", FBAuth, getUser);
router.post("/email-lookup", emailLookup);

//User Search Route
router.post("/user-search", FBAuth, userSearch);

exports.api = functions.https.onRequest(router);
