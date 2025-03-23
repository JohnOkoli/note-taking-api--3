import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import noteRoutes from './routes/noteRoute';
import authRoutes from './routes/authRoute';
import { errorHandler } from './middlewares/errorHandler';
import { loggingMiddleware } from './middlewares/loggingMiddleware';


// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(loggingMiddleware);

// Error handling middleware
app.use(errorHandler);

//Routes
app.use('/auth', noteRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 5501;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/note-taking-api';
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

export default app;
