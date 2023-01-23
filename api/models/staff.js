const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema({
    date: { type: Date, required: true },
    img: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number },
    sex: { type: String, required: true },
    role: { type: String, reuired: true },
    department: { type: String, required: true },
    qualifications: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Staff", staffSchema);