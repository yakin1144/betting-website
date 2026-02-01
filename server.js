const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
let db;
const uri = process.env.MONGODB_URI;

async function connectDB() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('bettingapp');
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

// Connect to database on startup
if (uri) {
  connectDB();
}

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' });
});

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});