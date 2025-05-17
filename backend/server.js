const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const feedbackRoutes = require('./routes/feedback');

const app = express();

// ✅ Allow CORS (Customize in production)
app.use(cors({
  origin: ['https://mern-feedback-app.vercel.app/', 'http://localhost:3000'], // Replace with your actual frontend URL
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
}));

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Routes
app.use('/api/feedback', feedbackRoutes);

// ✅ Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
});
