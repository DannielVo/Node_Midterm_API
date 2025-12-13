import express from "express";
import MessageController from "./messageController.js";

const router = express.Router();

/**
 * Send message
 */
router.post("/", MessageController.sendMessage);

/**
 * Get messages of a chat
 */
router.get("/:chatId", MessageController.getMessages);

export default router;
