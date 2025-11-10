import express from "express";
import {
    getAllTodo,
    createTodo,
    updateTodo,
    updateDoneStatus as toggleDone,
    deleteTodo,
} from "./controller.js";

const router = express.Router();

router.get("/", getAllTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.patch("/:id/done", toggleDone);
router.delete("/:id", deleteTodo);

export default router;
