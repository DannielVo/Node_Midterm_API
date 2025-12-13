import { Router } from "express";
import * as userController from "./userController.js";
const router = Router();

router.post("/", userController.createUser);
router.get("/", userController.listUsers);
router.get("/:id", userController.getUser);

export default router;
