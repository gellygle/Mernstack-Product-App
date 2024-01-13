// src/users/user.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UsersModel = require('../models/users.js');

const router = express.Router();


// Registration Endpoint
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UsersModel.findOne({ username: username });
    console.log(user);

    if (user) {
      return res.status(400).json({ message: 'Username Already exists' }); //    done checking 
    }

    const newUser = await UsersModel.create({ username, password: await bcrypt.hash(password, 10) });
    res.status(201).json({ message: 'User registered successfully', newUser }); // Done checking

  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login Endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const validUser = await UsersModel.findOne({ username });
    console.log(validUser);

    if (!validUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    

    



    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1d' });

    validUser.token=token
    res.json({ validUser,token});
    console.log(validUser,token);

  } catch (error) {
    console.error('Login Failed ', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;