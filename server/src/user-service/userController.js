import * as userService from "./userService.js";

/**
 * POST /api/users/register
 */
export async function createUser(req, res) {
  try {
    const { email, name, password } = req.body;

    // 1. Validate input
    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2. Create user
    const user = await userService.createUser({ email, name, password });

    // 3. Convert to plain object & remove sensitive data
    const userObj = user.toObject();
    delete userObj.password;

    // 4. Response
    return res.status(201).json({
      success: true,
      data: userObj,
    });
  } catch (err) {
    // Email already exists
    if (err.code === "EMAIL_EXISTS") {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: err.message || "Internal server error",
    });
  }
}

/**
 * POST /api/users/login
 */
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await userService.login({ email, password });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const userObj = user.toObject();
    delete userObj.password;

    return res.json({
      success: true,
      data: userObj,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

/**
 * GET /api/users/:id
 */
export async function getUser(req, res) {
  try {
    const user = await userService.getUser(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const userObj = user.toObject();
    delete userObj.password;

    return res.json({
      success: true,
      data: userObj,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Internal server error",
    });
  }
}

/**
 * GET /api/users
 */
export async function listUsers(req, res) {
  try {
    const users = await userService.listUsers();

    const safeUsers = users.map((user) => {
      const obj = user.toObject();
      delete obj.password;
      return obj;
    });

    return res.json({
      success: true,
      data: safeUsers,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Internal server error",
    });
  }
}
