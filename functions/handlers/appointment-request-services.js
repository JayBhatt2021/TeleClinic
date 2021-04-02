const Joi = require('joi');
const {database, admin} = require('../util/admin');
const config = require("../util/config");

const addAppointmentRequestSchema = Joi.object({
    patientName: Joi.string().required(),
    doctorName: Joi.string().required(),
    visitReason: Joi.string().required(),
    appointmentDate: Joi.string().required(),
    appointmentTime: Joi.string().required()
});

// Adds an appointment request to the doctorRequests collection
// REQ: patientName, doctorName, visitReason, appointmentDate, appointmentTime
// RES returns on success: Status 200, 'Appointment request added successfully.'
// RES returns on fail: Status 400, bad request
exports.addAppointmentRequest = (req, res) => {
    const validation = addAppointmentRequestSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    function sendResults(message) {
        res.status(200).send(message);
    }

    const patientName = req.body.patientName;
    const doctorName = req.body.doctorName;
    const visitReason = req.body.visitReason;
    const appointmentDate = req.body.appointmentDate;
    const appointmentTime = req.body.appointmentTime;

    database.collection("doctorRequests")
        .add({
            patientName: patientName,
            doctorName: doctorName,
            visitReason: visitReason,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime
        })
        .then(function () {
            const message = {message: "Appointment request added successfully."};
            sendResults(message);
        })
        .catch(err => {
            console.error(err);
        })
};

// Adds an appointment to the patientAppointments collection
// REQ: patientName, doctorName, visitReason, appointmentDate, appointmentTime
// RES returns on success: Status 200, 'Actual appointment added successfully.'
// RES returns on fail: Status 400, bad request
exports.addActualAppointment = (req, res) => {
    const validation = addAppointmentRequestSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    function sendResults(message) {
        res.status(200).send(message);
    }

    const patientName = req.body.patientName;
    const doctorName = req.body.doctorName;
    const visitReason = req.body.visitReason;
    const appointmentDate = req.body.appointmentDate;
    const appointmentTime = req.body.appointmentTime;

    database.collection("patientAppointments")
        .add({
            patientName: patientName,
            doctorName: doctorName,
            visitReason: visitReason,
            appointmentDate: appointmentDate,
            appointmentTime: appointmentTime
        })
        .then(function () {
            const message = {message: "Actual appointment added successfully."};
            sendResults(message);
        })
        .catch(err => {
            console.error(err);
        })
};

// Obtains all of the appointment requests in the database
// REQ: None
// RES: All of the appointment requests in the doctorRequests collection
exports.obtainAppointmentRequests = (req, res) => {
    database.collection("doctorRequests")
        .onSnapshot((querySnapshot) => {
            const appointmentRequestsArray = [];
            querySnapshot.forEach(function (doc) {
                appointmentRequestsArray.push(doc.data());
            });
            res.status(200).send(appointmentRequestsArray);
        });
};

// Obtains all of the actual appointments in the database
// REQ: None
// RES: All of the actual appointments in the patientAppointments collection
exports.obtainActualAppointments = (req, res) => {
    database.collection("patientAppointments")
        .onSnapshot((querySnapshot) => {
            const actualAppointmentsArray = [];
            querySnapshot.forEach(function (doc) {
                actualAppointmentsArray.push(doc.data());
            });
            res.status(200).send(actualAppointmentsArray);
        });
};
