import Task from "../models/Task.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

// create an endpoint to create the new task
const addTask = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, description, status, creationDate } = req.body
    if (!title || !description || !status) {
        throw new ApiError(400, "Please provide all required fields")
    }
    let existTask = await Task.findById(id)
    if (existTask) {
        return new ApiError(409, "task is already exist")
    }
    let newTask = await Task.create({ title, status, description, creationDate })

    return res
        .status(200)
        .json(new ApiResponse({ task: newTask }, 200, "task added successfully"))
})

const getTask = asyncHandler(async (req, res) => {
    const { id } = req.params
    const taskId = await Task.findById(id)
    if (!taskId) {
        return new ApiError(404, "task not found")
    }
    return res.status(200).json(new ApiResponse(taskId, 200, "got that task"))

})

const getAllTask = asyncHandler(async (req, res) => {
    const allTask = await Task.find()
    if (allTask.length < 0) {
        throw new ApiError(404, "there is no task")
    }
    return res.status(200).json(new ApiResponse(allTask, 200, "got all the task"))
})

// deleting the task
const deleteTask = asyncHandler(async (req, res) => {
    const { id } = req.params
    const taskId = await Task.findById(id)
    await Task.findByIdAndDelete(taskId)
    if (!taskId) {
        return new ApiError(404, err.message, "there is no such data")
    }
    return res.status(200).json(new ApiResponse(null,200, "successfully deleted the task"))
})

// updating the task
const updateTask = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { title, description, status } = req.body;
    const task = await Task.findByIdAndUpdate(id, { title, description, status }, { new: true })
    if (!task) {
        return new ApiError(404, "there is no task to update")
    }
    return res.status(200).json(new ApiResponse({data:task}, 200, "successfully updated the task"))
})
export { addTask, getTask, getAllTask, deleteTask, updateTask }
