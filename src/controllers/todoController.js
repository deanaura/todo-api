const Todo = require('../models/todo');

exports.createTodo = (req, res) => {
    const { title, description } = req.body;
    const newTodo = Todo.createTodo(title, description);
    res.status(201).json(newTodo);
};

exports.getAllTodos = (req, res) => {
    const todos = Todo.getAllTodos();
    res.status(200).json(todos);
}

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const updateTodo = Todo.updateTodoById(Number(id), req.body);
    if (updateTodo) {
        res.status(200).json(updateTodo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    const deletedTodo = Todo.deleteTodoById(Number(id));
    if (deletedTodo) {
        res.status(200).json(deletedTodo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};