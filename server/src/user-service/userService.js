import { UserRepository } from "./userRepository.js";
import bcrypt from "bcrypt";

export async function createUser({ name, email, password }) {
  const checkName = await UserRepository.findByName(name);
  if (checkName) throw new Error("name is  already taken");

  const exists = await UserRepository.findByEmail(email);
  if (exists) throw new Error("Email already exists");

  const hash = await bcrypt.hash(password, 10);

  return await UserRepository.create({
    name,
    email,
    password: hash,
  });
}

export async function login({ email, password }) {
  const user = await UserRepository.findByEmail(email);
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return null;

  return user;
}

export async function getUser(id) {
  return await UserRepository.findById(id);
}

export async function listUsers() {
  return await UserRepository.findAll();
}
