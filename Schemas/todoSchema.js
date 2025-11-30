const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: "string",
    require: true,
  },
  description: {
    type: "string",
    require: true,
  },
  status: {
    type: "string",
    enum: ["active", "inactive"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = todoSchema;
