const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// menambahkan tugas baru
router.post('/todos', todoController.createTodo);

// menampilkan semua tugas
router.get('/todos', todoController.getAllTodos);

// memperbarui tugas berdasarkan id
router.put('/todos/:id', todoController.updateTodo);

// menghapus tugas berdasarkan id
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;