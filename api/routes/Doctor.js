const express = require('express');
const router = express.Router();

const multer = require('multer');

const Doctor = require('../models/doctor');

const Storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: Storage }).single('img');

//CREATE NEW DOCTOR
router.post('/', upload, (req, res) => {
    const {
        date,
        firstName,
        lastName,
        age,
        sex,
        role,
        department,
        qualifications,
        phone,
        email
    } = req.body;
    const img = req.file.filename;

    const doctor = new Doctor({ img, date, firstName, lastName,
                                age, sex, role, department,
                                qualifications, phone, email });

    doctor
        .save()
        .then(() => {
            console.log("Doctor registered successfully");
            res.status(201).json(doctor);
        })
        .catch ((err) => console.log(err));
});

//UPDATE DOCTOR
router.put('/:id', async (req, res) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedDoctor);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE DOCTOR
router.delete('/:id', async (req, res) => {
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedDoctor);
        console.log("Doctor deleted successfully!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL DOCTORS
router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET SINGLE DOCTOR
router.get('/:id', async (req, res) => {
    try {
        const id = req.params._id;
        const singleDoctor = await Doctor.findById(req.params.id);
        res.status(200).json(singleDoctor);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
