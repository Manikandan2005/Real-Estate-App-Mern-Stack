import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
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

// Middleware
app.use(cors({ origin: process.env.CLIENTURL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/test', testRoutes);
app.use('/users', userRoutes);
app.use('/chats', chatRoutes);
app.use('/messages', messageRoute);

// Serve static files from the React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
