import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import Todo from "../model/todoModel.js";

//Create Task Todo
const createTask = asyncHandler(async (req, res) => {
    const {task, active} = req.body
    const todo = await Todo.create({task, active});

    if(todo) {
        res.status(201).json({
            success: true,
            data: todo,
            message: 'Task is created successfully'
        })
    } else {
        res.status(400).json({
            success: false,
            message: 'Something went wrong'
        })
    }
})


//Update Todo
const updateTask = asyncHandler(async (req, res) => {
    const {task, active} = req.body
    const existTask = await Todo.findOne({ _id: req.params.id})

    if(existTask){
        existTask.task = task;
        existTask.active = active
        const updateTask = await existTask.save();
        res.status(200).json({
            success: true,
            data: updateTask,
            message: 'Task is updated successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }
})


//Delete Task By Id
const deleteTaskById = asyncHandler(async (req, res) => {
    const existTask = await Todo.findOne({ _id : req.params.id})
    if(existTask){
        await existTask.remove();
        res.status(200).json({
            success: true,
            message: 'Task is deleted successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }
})


//Delete All Task
const deleteAllTasks = asyncHandler(async (req, res) => {
    const allTasks = await Todo.remove({})
    if(allTasks){
        res.status(200).json({
            success: true,
            message: 'All Tasks are deleted successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }
})


//Get Task By Id
const getTaskById = asyncHandler(async (req, res) => {
    const existTask = await Todo.findOne({ _id : req.params.id})
    if(existTask){
        res.status(200).json({
            success: true,
            data: existTask,
            message: 'Task is fetched successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Task is Not Found'
        })
    }
})


//Get All Task
const getAllTasks = asyncHandler(async (req, res) => {
    const allTasks = await Todo.find({})
    if(allTasks){
        res.status(200).json({
            success: true,
            data: allTasks,
            message: 'All Tasks are fetched successfully'
        })
    }else{
        res.status(401).json({
            success: false,
            data: null,
            message: 'Tasks are Not Found'
        })
    }
})


export {
    createTask,
    updateTask,
    deleteTaskById,
    deleteAllTasks,
    getTaskById,
    getAllTasks
}
