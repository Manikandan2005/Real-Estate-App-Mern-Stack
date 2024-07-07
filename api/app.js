import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import postRoutes from './routes/Post.route.js';
import authRoutes from './routes/Auth.route.js';
import testRoutes from './routes/Test.route.js';
import userRoutes from './routes/User.route.js';
import chatRoutes from './routes/Chat.route.js';
import messageRoute from './routes/Message.route.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const FRONTEND_URL = process.env.FRONTEND_URL || "https://real-estate-app-mern-stack-9ff5.vercel.app";

// Middleware
app.use(cors({
  origin: [FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/test', testRoutes);
app.use('/users', userRoutes);
app.use('/chats', chatRoutes);
app.use('/messages', messageRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
