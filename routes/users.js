import express from "express";
import {
  createUser,
  deleteUserById,
  getUsers,
  getUsersById,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUsersById);

router.delete("/:id", deleteUserById);

router.patch("/:id", updateUser);

export default router;
