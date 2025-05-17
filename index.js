const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Example route (you can use your real API routes here)
const getCategoryRoute = require('./backend/routes/register'); // update path if needed
app.use('/api', getCategoryRoute);

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all route to serve React's index.html on unknown routes (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
