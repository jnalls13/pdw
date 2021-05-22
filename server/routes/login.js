const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();
const { User } = require('../database');

// login route
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user === null) {
      res.status(404).send('Username Not Found');
      return;
    }
    // check that password is correct
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ user_id: user.id }, process.env.ACCESS_TOKEN_SECRET);
      res.json({ accessToken });
    }
    res.status(400).send('Username or Password incorrect');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
