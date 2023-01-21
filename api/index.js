const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const patientRouter = require('./routes/Patient');
const doctorRouter = require('./routes/Doctor');

const port = 3001;
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfully!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/patient', patientRouter);
app.use('/api/doctor', doctorRouter);

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});