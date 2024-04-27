import { Router } from "express";
import { addTask, deleteTask, getAllTask, getTask, updateTask } from "../controllers/task.controller.js";
const router=Router()

router.route('/').post(addTask)
router.route('/:id').get(getTask)
router.route('/').get(getAllTask)
router.route('/:id').put(updateTask)
router.route('/:id').delete(deleteTask)
export default router