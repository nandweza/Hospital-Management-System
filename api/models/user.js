const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authSchema = new Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Auth', authSchema);
