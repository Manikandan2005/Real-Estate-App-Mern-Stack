import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/Post.route.js";
import authRoutes from "./routes/Auth.route.js";
import testRoutes from "./routes/Test.route.js";
import userRoutes from "./routes/User.route.js";
import ChatRoutes from "./routes/Chat.route.js";
import messageRoute from "./routes/Message.route.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: process.env.CLIENTURL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/posts", postRoutes);
app.use("/auth", authRoutes);
app.use("/test", testRoutes);
app.use("/users", userRoutes);
app.use("/chats", ChatRoutes);
app.use("/messages", messageRoute);

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
