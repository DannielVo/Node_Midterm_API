import ChatService from "./chatService.js";

class ChatController {
  async createChat(req, res) {
    try {
      const { firstUserId, secondUserId } = req.body;

      const chat = await ChatService.createChat(firstUserId, secondUserId);
      res.status(201).json(chat);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getUserChats(req, res) {
    try {
      const userId = req.params.userId;

      const chats = await ChatService.getUserChats(userId);
      res.status(200).json(chats);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async findChat(req, res) {
    try {
      const { firstUserId, secondUserId } = req.params;

      const chat = await ChatService.findChat(firstUserId, secondUserId);
      res.status(200).json(chat);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new ChatController();
