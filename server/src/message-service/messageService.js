import MessageRepository from "./messageRepository.js";

export async function sendMessage(data) {
  return await MessageRepository.create(data);
}

export async function getMessages(chatId) {
  return await MessageRepository.findByChatId(chatId);
}
