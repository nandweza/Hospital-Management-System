const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    sn: { type: Number, required: true },
    date: { type: Date, required: true },
    name: { type: String, required: true },
    sex: { type: String, required: true },
    dob: { type: Date, reuired: true },
    bloodgp: { type: String, reuired: true },
    medicalh: { type: String },
    symptoms: { type: String },
    disease: { type: String },
    diagnosis: { type: String },
    pmedication: { type: String },
    labtest: { type: String },
    phone: { type: String },
    email: { type: String },
    admitted: { type: Date },
    discharged: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model("Patient", patientSchema);