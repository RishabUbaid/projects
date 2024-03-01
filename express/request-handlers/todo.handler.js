
import todosModel from "../model/todos.model.js";

export async function addTodo(req, res) {
    try {
        let { todo } = req.body;
        await todosModel.create({
            todo,
            completed: false
        });
        return res.status(201).json({
            msg: "Todo added successfully!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Some error occured!"
        })
    }
}

export async function getTodo(req, res) {
    try {
        let todos = await todosModel.find();
        console.log(todos);
        return res.status(200).json({
            msg: "Get todo successful!",
            todos
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Some error occured!"
        })
    }
}

export async function updateTodo(req, res) {
    try {
        let { id, newTodo } = req.body;
        await todosModel.updateOne({ _id: id },{ todo: newTodo });
        return res.status(200).json({
            msg: "Todo updated successfully!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Some error occured!"
        })
    }
}

export async function deleteTodo(req, res) {
    try {
        let { id } = req.body;
        await todosModel.deleteOne({ _id: id });
        return res.status(200).json({
            msg: "Todo deleted successfully!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Some error occured!"
        })
    }
}