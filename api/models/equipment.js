const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const equipmentSchema = new Schema ({
    sn: { type: Number },
    item: { type: String },
    quantity: { type: String },
    desc: { type: String },
    date: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model("Equipment", equipmentSchema);