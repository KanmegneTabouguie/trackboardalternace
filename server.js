// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/database');
const User = require('./models/User'); // Add this line
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Test DB connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

// Sync models
db.sync() // Add this line
  .then(() => console.log('Database synced...'))
  .catch(err => console.log('Error: ' + err));


// Routes
app.use('/applications', require('./routes/applicationRoutes'));
app.use('/auth', require('./routes/authRoutes'));

// Server start
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
