const express = require('express');
const session = require('express-session');
const authRoutes = require('./auth');

const app = express();

// Use express middleware to handle JSON requests
app.use(express.json()); // For handling JSON data in POST requests

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Session setup
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));

// Serve the login page at /login
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Use authentication routes
app.use(authRoutes);

// Start server
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
