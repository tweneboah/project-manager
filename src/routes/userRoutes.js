const express = require('express');
const User = require('../models/User');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send('User');
});

userRouter.post('/register', async (req, res) => {
  res.send('Create');
});
module.exports = userRouter;
