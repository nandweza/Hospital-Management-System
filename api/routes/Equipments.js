const express = require('express');
const router = express.Router();

const Equipment = require('../models/equipment');

//CREATE NEW EQUIPMENT
router.post('/', async(req, res) => {
    const newEquipment = new Equipment(req.body);

    try {
        const savedEquipment = await newEquipment.save();
        res.status(201).json(savedEquipment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE EQUIPMENT
router.put('/:id', async (req, res) => {
    try {
        const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedEquipment);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE EQUIPMENT
router.delete('/:id', async (req, res) => {
    try {
        const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedEquipment);
        console.log("Equipment deleted successfully!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL EQUIPMENTS
router.get('/', async (req, res) => {
    try {
        const equipments = await Equipment.find();
        res.status(200).json(equipments);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET SINGLE EQUIPMENT
router.get('/:id', async (req, res) => {
    try {
        const id = req.params._id;
        const singleEquipment = await Equipment.findById(req.params.id);
        res.status(200).json(singleEquipment);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
