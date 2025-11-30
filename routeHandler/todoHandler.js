const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../Schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

// get all the todo
router.get("/", async (req, res) => {});

// get all the todo
router.get("/:id", async (req, res) => {});

// CREATE TODO
router.post("/", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();  
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// post the todo
router.post("/all", async (req, res) => {
    try {
        const multiple = await Todo.insertMany(req.body);
        res.status(201).json(multiple);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//  post multiple the todo
router.put("/:id", async (req, res) => {});

// delete the todo
router.delete("/:id", async (req, res) => {});

module.exports = router;
