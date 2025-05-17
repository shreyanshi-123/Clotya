const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const getCategory = require('./backend/routes/register.js');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://shreyanshi:wvq9lKZsEp3024Uu@cluster0.ge0id7d.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('strictQuery', true);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', getCategory);

// Serve React frontend
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
