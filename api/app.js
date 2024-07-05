const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const postRoutes = require('./routes/Post.route.js');
const authRoutes = require('./routes/Auth.route.js');
const testRoutes = require('./routes/Test.route.js');
const userRoutes = require('./routes/User.route.js');
const ChatRoutes = require('./routes/Chat.route.js');
const messageRoute = require('./routes/Message.route.js');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: process.env.CLIENTURL, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/test', testRoutes);
app.use('/users', userRoutes);
app.use('/chats', ChatRoutes);
app.use('/messages', messageRoute);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
