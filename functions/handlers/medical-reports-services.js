const Joi = require('joi');
const {database, admin} = require('../util/admin');
const config = require("../util/config");

const addReportSchema = Joi.object({
    reportName: Joi.string().required(),
    reportDate: Joi.string().required(),
    patientName: Joi.string().required(),
    doctorName: Joi.string().required()
});

const updateReportFileLocationSchema = Joi.object({
    reportName: Joi.string().required(),
    reportFileUrl: Joi.string().required()
});

// Adds a medical report to the reports collection
// REQ: reportName, reportDate, patientName, and doctorName
// RES returns on success: Status 200, 'Report added successfully.'
// RES returns on fail: Status 400, bad request
exports.addReport = (req, res) => {
    const validation = addReportSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    function sendResults(message) {
        res.status(200).send(message);
    }

    const reportName = req.body.reportName;
    const reportDate = req.body.reportDate;
    const patientName = req.body.patientName;
    const doctorName = req.body.doctorName;

    database.collection("reports").doc(reportName)
        .set({
            reportName: reportName,
            reportDate: reportDate,
            patientName: patientName,
            doctorName: doctorName
        })
        .then(function () {
            const message = {message: "Report added successfully."};
            sendResults(message);
        })
        .catch(err => {
            console.error(err);
        })
};

// Uploads report file to bucket storage
// REQ: Authorization Header: tokenId, reportFile: report file
// RES: 200 status, reportFileUrl
exports.uploadReportFile = (req, res) => {
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');
    let reportFileUrl;

    const busboy = new BusBoy({headers: req.headers});
    let reportFileName;
    let reportFileToBeUploaded = {};
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        const reportFileExtension = filename.split('.')[filename.split('.').length - 1];
        reportFileName = `${Math.round(Math.random() * 100000000000)}.${reportFileExtension}`;
        const filepath = path.join(os.tmpdir(), reportFileName);
        reportFileToBeUploaded = {filepath, mimetype};
        file.pipe(fs.createWriteStream(filepath));
    });
    busboy.on('finish', () => {
        admin.storage().bucket().upload(reportFileToBeUploaded.filepath, {
            resumable: false,
            metadata: {
                metadata: {
                    contentType: reportFileToBeUploaded.mimetype
                }
            }
        })
            .then(() => {
                reportFileUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${reportFileName}?alt=media`;
                return res.send(reportFileUrl);
            })
            .catch(err => {
                console.error(err);
                return res.status(500).send(err.code)
            })
    });
    busboy.end(req.rawBody);
};

// Updates the report file location in the database
// REQ: reportName and reportFileUrl
// RES returns on success: Status 200, 'Report location updated successfully.'
// RES returns on fail: Status 400, bad request
exports.updateReportFileLocation = (req, res) => {
    const validation = updateReportFileLocationSchema.validate(req.body);
    if (validation.error) {
        let error = {message: validation.error.details[0].message};
        return res.status(400).send(error);
    }

    function sendResults(message) {
        res.status(200).send(message);
    }

    const reportName = req.body.reportName;
    const reportFileUrl = req.body.reportFileUrl;

    database.collection("reports").doc(reportName)
        .update({reportFileUrl: reportFileUrl})
        .then(function () {
            const message = {message: "Report location updated successfully."};
            sendResults(message);
        })
        .catch(err => {
            console.error(err);
        })
};

// Obtains all of the reports in the database
// REQ: None
// RES: All of the reports in the reports collection
exports.obtainReports = (req, res) => {
    database.collection("reports")
        .onSnapshot((querySnapshot) => {
            const reportsArray = [];
            querySnapshot.forEach(function (doc) {
                reportsArray.push(doc.data());
            });
            res.status(200).send(reportsArray);
        });
};
