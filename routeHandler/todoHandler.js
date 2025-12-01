const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../Schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema);

// get all the todo
router.get("/", async (req, res) => {
  try {
    const getAllData = await Todo.find();
    res.status(200).json(getAllData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
-
// instance methods learn -------------------------- important
router.get("/active", async (req, res) => {
    try {
        const todo = new Todo();          // instance create
        const data = await todo.findActive(); // instance method call
        
        res.status(200).json(data);       // response send
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// static methods learn ____________________________ important



// get category ways ba je kono prpperty er name diye find the todo
// router.get("/", async (req, res) => {
//   try {
//     const getAllData = await Todo.find({title: 'jhinuk'});
//     res.status(200).json(getAllData);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// get selected data --> mane hocche ami jodi data theke kono property bad diye data get korte cai
// router.get("/", async (req, res) => {
//   try {
//     const getAllData = await Todo.find().select({
//         _id: 0,
//         _v: 0,
//         _date: 0
//     }).limit(2).exec()
//     res.status(200).json(getAllData);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// get data limit
// router.get("/", async (req, res) => {
//   try {
//     const getAllData = await Todo.find().select({
//         _id: 0,
//         _v: 0,
//         _date: 0
//     }).limit(2)
//     res.status(200).json(getAllData);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// get all the todo
router.get("/:id", async (req, res) => {
  try {
    const onData = await Todo.findById({ _id: req.params.id });
    res.status(200).json(onData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

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
router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: "active",
          title: "jhinuk",
        },
      }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete the todo
router.delete("/:id", async (req, res) => {
  try {
    const todoDelete = await Todo.deleteOne({ _id: req.params.id });
    res.status(200).json(todoDelete);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


module.exports = router;
