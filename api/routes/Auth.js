const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register
router.post("/register", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: (await bcrypt.hash(req.body.password, salt)),
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});


//login
router.post("/login", async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const bytes = bcrypt.compare(user.password, req.body.password);
  
      const accessToken = jwt.sign(
        { id: user._id },
        'my_secret_key',
        {expiresIn: "72h"}
      );
  
      const { password, ...info } = user._doc;
      if (!bytes) {
        res.status(400).json("Wrong password or username");
      } else {
        res.status(200).json({ ...info, accessToken });
      } 
    } else {
      res.status(401).json("User does not exists");
    }
  });

module.exports = router;