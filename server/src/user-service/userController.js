import * as userService from "./userService.js";

export async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
}

export async function getUser(req, res) {
  const user = await userService.getUser(req.params.id);
  res.json({ success: true, data: user });
}

export async function listUsers(req, res) {
  const users = await userService.listUsers();
  res.json({ success: true, data: users });
}
