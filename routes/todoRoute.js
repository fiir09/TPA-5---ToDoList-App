import express from "express";

const router = express.Router();

import { createTask, updateTask, deleteTaskById, deleteAllTasks, getTaskById, getAllTasks } from "../controller/todoController.js";

// import protect from '../middleware/authUser.js';

router.route('/todo').post(createTask);
router.route('/todo/:id').put(updateTask);
router.route('/todo/:id').delete(deleteTaskById);
router.route('/todo').delete(deleteAllTasks);
router.route('/todo/:id').get(getTaskById);
router.route('/todo/').get(getAllTasks);

export default router;