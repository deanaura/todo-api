class Todo {
    constructor() {
        this.todos = [];
        this.currentId = 1;
    }

    // create todo
    createTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed:false,
        };
        this.todos.push(todo);
        return todo;
    }

    // read todo
    getAllTodos() {
        return this.todos;
    }

    // update todo
    updateTodoById(id, updateData) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            this.todos[todoIndex] = { ...this.todos[todoIndex], ...updateData };
            return this.todos[todoIndex];
        }
        return null;
    }

    // delete todo
    deleteTodoById(id) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex !== -1) {
            const deletedTodo = this.todos.splice(todoIndex, 1);
            return deletedTodo[0];
        }
        return null;
    }
}

module.exports = new Todo();