import Chat from "./chatModel.js";

class ChatRepository {
  async createChat(members) {
    return await Chat.create({ members });
  }

  async findUserChats(userId) {
    return await Chat.find({ members: { $in: [userId] } });
  }

  async findChatBetweenUsers(firstUserId, secondUserId) {
    return await Chat.findOne({
      members: { $all: [firstUserId, secondUserId] },
    });
  }
}

export default new ChatRepository();
