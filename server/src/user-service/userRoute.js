import { Router } from "express";
import * as userController from "./userController.js";
const router = Router();

router.post("/register", userController.createUser);
router.get("/", userController.listUsers);
router.get("/:id", userController.getUser);
router.post("/login", userController.login);

export default router;
