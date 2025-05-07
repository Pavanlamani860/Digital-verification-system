const express = require('express');
const router = express.Router(); // <-- Make sure this line is here
const bcrypt = require('bcrypt');
const db = require('./db');

// REGISTER route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send('Email and password are required');
    }

    // Check if user already exists
    const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).send('User already registered');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

    // Success response
    console.log('✅ Registration complete for:', email);
    return res.status(200).send('Registration successful');
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).send('Server error');
  }
});

// LOGIN route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(401).send('User not found');
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).send('Invalid password');
    }

    req.session.userId = user.id;
    res.status(200).send('Login successful');
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send('Server error');
  }
});

// LOGOUT route
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).send('Error logging out');
    }
    res.send('Logged out');
  });
});

module.exports = router;
