import { UserRepository } from "./userRepository.js";
import bcrypt from "bcrypt";

export async function createUser({ username, email, password, fullname }) {
  const exists = await UserRepository.findByEmail(email);
  if (exists) throw new Error("Email already exists");

  const hash = await bcrypt.hash(password, 10);

  return await UserRepository.create({
    username,
    email,
    password: hash,
    fullname,
  });
}

export async function getUser(id) {
  return await UserRepository.findById(id);
}

export async function listUsers() {
  return await UserRepository.findAll();
}
