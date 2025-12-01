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

// instance methods 
todoSchema.methods = {
  findActive: function () {
  return mongoose.model("Todo").find({ status: "active" });
}
};



module.exports = todoSchema;
