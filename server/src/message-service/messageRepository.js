import Message from "./messageModel.js";

class MessageRepository {
  /**
   * Tạo message mới
   */
  async create({ chatId, senderId, text }) {
    return await Message.create({
      chatId,
      senderId,
      text,
    });
  }

  /**
   * Lấy toàn bộ message của 1 chat
   */
  async findByChatId(chatId) {
    return await Message.find({ chatId }).sort({ createdAt: 1 });
  }

  /**
   * Lấy message theo id
   */
  async findById(messageId) {
    return await Message.findById(messageId);
  }

  /**
   * Xóa message (nếu cần)
   */
  async deleteById(messageId) {
    return await Message.findByIdAndDelete(messageId);
  }
}

export default new MessageRepository();
