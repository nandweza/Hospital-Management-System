const express = require('express');
const router = express.Router();

const multer = require('multer');

const Staff = require('../models/staff');

const Storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: Storage }).single('img');

//CREATE NEW STAFF
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

    const staff = new Staff({ img, date, firstName, lastName,
                                age, sex, role, department,
                                qualifications, phone, email });

    staff
        .save()
        .then(() => {
            console.log("Staff registered successfully");
            res.status(201).json(staff);
        })
        .catch ((err) => console.log(err));
});

//UPDATE STAFF
router.put('/:id', async (req, res) => {
    try {
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedStaff);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE STAFF
router.delete('/:id', async (req, res) => {
    try {
        const deletedStaff = await Staff.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedStaff);
        console.log("Staff deleted successfully!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL STAFFS
router.get('/', async (req, res) => {
    try {
        const staffs = await Staff.find();
        res.status(200).json(staffs);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET SINGLE STAFF
router.get('/:id', async (req, res) => {
    try {
        const id = req.params._id;
        const singleStaff = await Staff.findById(req.params.id);
        res.status(200).json(singleStaff);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
