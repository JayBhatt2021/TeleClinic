const Joi = require('joi');
const {database, admin} = require('../util/admin');
const config = require('../util/config');
const firebase = require('firebase');

const obtainRealTimeUsersSchema = Joi.object({
    userId: Joi.string().required()
});

const addMessageSchema = Joi.object({
    msgObj: Joi.any().required()
});

const obtainRealTimeConversationsSchema = Joi.object({
    uid_1: Joi.string().required(),
    uid_2: Joi.string().required()
});

// Obtains all of the users (besides the current user) in the database
// REQ: userId
// RES: all of the users (besides the current user) in the usersInfo collection
exports.obtainRealTimeUsers = (req, res) => {
    const validation = obtainRealTimeUsersSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    const userId = req.body.userId;

    database.collection("usersInfo")
        .onSnapshot((querySnapshot) => {
            const usersArray = [];
            querySnapshot.forEach(function (doc) {
                if (doc.id !== userId) {
                    usersArray.push(doc.data());
                }
            });
            res.status(200).send(usersArray);
        });
};

// Adds a message to the chat
// REQ: msgObj
// RES returns on success: Status 200, 'Message added successfully.'
// RES returns on fail: Status 400, bad request
exports.addMessage = (req, res) => {
    const validation = addMessageSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    function sendResults(message) {
        res.status(200).send(message);
    }

    const msgObj = req.body.msgObj;

    database.collection('conversations')
        .add({
            ...msgObj,
            isView: false,
            createdAt: new Date()
        })
        .then(function () {
            const message = {message: "Message added successfully."};
            sendResults(message);
        })
        .catch(err => {
            console.error(err);
        })
};

// Obtains all of the messages for each conversation
// REQ: userId of the sender and userId of the receiver
// RES returns on success: Status 200, all of the messages for each conversation
// RES returns on fail: Status 400, bad request
exports.obtainRealTimeConversations = (req, res) => {
    const validation = obtainRealTimeConversationsSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    const userId1 = req.body.uid_1;
    const userId2 = req.body.uid_2;

    database.collection('conversations')
        .orderBy('createdAt', 'asc')
        .onSnapshot((querySnapshot) => {
            const conversationsArray = [];
            querySnapshot.forEach(doc => {
                if ((doc.data().uid_1 === userId1 && doc.data().uid_2 === userId2) ||
                    (doc.data().uid_1 === userId2 && doc.data().uid_2 === userId1)) {
                    conversationsArray.push(doc.data());
                }
            });
            res.status(200).send(conversationsArray);
    });
}
