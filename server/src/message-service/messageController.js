import * as MessageService from "./messageService.js";

class MessageController {
  /**
   * POST /api/messages
   * body: { chatId, senderId, text }
   */
  async sendMessage(req, res) {
    try {
      const { chatId, senderId, text } = req.body;

      if (!chatId || !senderId || !text) {
        return res
          .status(400)
          .json({ message: "chatId, senderId and text are required" });
      }

      const message = await MessageService.sendMessage({
        chatId,
        senderId,
        text,
      });

      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
   * GET /api/messages/:chatId
   */
  async getMessages(req, res) {
    try {
      const { chatId } = req.params;

      const messages = await MessageService.getMessages(chatId);

      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new MessageController();
