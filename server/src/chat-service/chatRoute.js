import express from "express";
import ChatController from "./chatController.js";

const router = express.Router();

router.post("/", ChatController.createChat); // create chat
router.get("/:userId", ChatController.getUserChats); // get all chats of a user
router.get("/find/:firstUserId/:secondUserId", ChatController.findChat); // find chat between 2 users

export default router;
 