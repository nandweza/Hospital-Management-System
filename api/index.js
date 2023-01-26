const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const patientRouter = require('./routes/Patient');
const doctorRouter = require('./routes/Doctor');
const staffRouter = require('./routes/Staff');
const equipmentRouter = require('./routes/Equipments');
const authRouter = require('./routes/Auth');

const port = 3001;
dotenv.config();
mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfully!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/patient', patientRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/staff', staffRouter);
app.use('/api/equipment', equipmentRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});