const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const feedbackRoutes = require('./routes/feedback');

const app = express();

app.use(cors({
  origin: ['https://mern-feedback-app.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

app.use('/api/feedback', feedbackRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
});
