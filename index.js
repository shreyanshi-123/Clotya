const express = require('express');
const path = require('path');
const axios = require('axios');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const categoryRoutes = require('./backend/routes/register');  // Ensure the correct path
console.log (categoryRoutes);
dotenv.config(); // Load env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, './frontend/build')));

// Handle requests by serving index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
});

// Use the category routes
app.use('/api', categoryRoutes); // Prefix '/api' for all routes from categoryRoutes

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(' MongoDB connected');
  app.listen(PORT, () => console.log(` Server running at http://localhost:${PORT}`));
}).catch((error) => {
  console.error(' MongoDB connection error:', error.message);
});
