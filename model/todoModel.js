import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo