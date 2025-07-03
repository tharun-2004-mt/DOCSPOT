require('dotenv').config(); // Load environment variables

const express = require('express');
const connectToDB = require('./config/connectToDB');

const app = express();

// Middleware (optional, e.g., for JSON parsing)
app.use(express.json());

// Connect to MongoDB
connectToDB();

// Example route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
