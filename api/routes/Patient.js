const express = require('express');
const patient = require('../models/patient');
const router = express.Router();

const Patient = require('../models/patient');

//CREATE NEW PATIENT
router.post('/', async(req, res) => {
    const newPatient = new Patient(req.body);

    try {
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE PATIENT
router.put('/:id', async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedPatient);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE PATIENT
router.delete('/:id', async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedPatient);
        console.log("Patient deleted successfully!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL PATIENTS
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET SINGLE PATIENT
router.get('/:id', async (req, res) => {
    try {
        const id = req.params._id;
        const singlePatient = await Patient.findById(req.params.id);
        res.status(200).json(singlePatient);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
