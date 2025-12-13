import express from "express";
import cors from "cors";
import userRoute from "./src/user-service/userRoute.js";
import chatRoute from "./src/chat-service/chatRoute.js";
import messageRoute from "./src/message-service/messageRoute.js";
const app = express();

app.use(express.json());
app.use(cors());
// Register routes
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.get("/", (req, res) => {
  res.send("hello from 5000");
});

export default app;
