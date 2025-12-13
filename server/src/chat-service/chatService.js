import ChatRepository from "./chatRepository.js";

class ChatService {
  async createChat(firstUserId, secondUserId) {
    // Check if chat already exists
    const existingChat = await ChatRepository.findChatBetweenUsers(
      firstUserId,
      secondUserId
    );

    if (existingChat) return existingChat;

    // Create new chat
    return await ChatRepository.createChat([firstUserId, secondUserId]);
  }

  async getUserChats(userId) {
    return await ChatRepository.findUserChats(userId);
  }

  async findChat(firstUserId, secondUserId) {
    return await ChatRepository.findChatBetweenUsers(firstUserId, secondUserId);
  }
}

export default new ChatService();
