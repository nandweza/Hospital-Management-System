const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');

const port = 3001;
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfully!"))
.catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});