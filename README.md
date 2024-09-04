# Simple CRUD API for To-Do List
## Description
This project provides a simple CRUD (Create, Read, Update, Delete) API for managing a To-Do List. The API allows users to add, view, update, and delete tasks. It is built using Node.js and Express.js, following object-oriented programming (OOP) principles and modularization to ensure a clean and maintainable codebase.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js to create the API.

## Features
- **Add a new task**: Create a new to-do item.
- **View all tasks**: Retrieve a list of all to-do items.
- **Update a task**: Update an existing to-do item by its ID.
- **Delete a task**: Delete an existing to-do item by its ID.


## Endpoint API

### 1. **Create a New Task**

- **Endpoint:** `POST /api/todos`
- **Request Body(JSON):**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
- **Response:**
  ```json
  {
  "id": 1,
  "title": "Task Title",
  "description": "Task Description",
  "completed": false
  }

### 2. **View All Tasks**

- **Endpoint:** `GET /api/todos`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "Task Title",
      "description": "Task Description",
      "completed": false
    }
  ]

### 3. **Update a Task by ID**

- **Endpoint:** `PUT /api/todos/:id`
- **Request Body(example):**
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description"
  }
- **Response:**
  ```json
  {
  "id": 1,
  "title": "Updated Task Title",
  "description": "Updated Task Description",
  "completed": false
  }
- **Error Response (if task not found):**
  ```json
  {
  "message": "Todo not found"
  }

### 4. **Delete a Task by ID**

- **Endpoint:** `DELETE /api/todos/:id`
- **Response:**
  ```json
  {
  "id": 1,
  "title": "Task Title",
  "description": "Task Description",
  "completed": false
  }
- **Error Response (if task not found):**
  ```json
  {
  "message": "Todo not found"
  }


