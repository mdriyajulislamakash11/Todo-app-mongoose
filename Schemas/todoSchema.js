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

// instance methods ---------------
todoSchema.methods = {
  findActive: function () {
    return mongoose.model("Todo").find({ status: "active" });
  },
};

// static methods ----------------
todoSchema.statics = {
  findByJS: function () {
    return this.find({
      $or: [{ title: /js/i }, { description: /js/i }],
    });
  },
};

// query methods --------------
todoSchema.query = {
  byLanguage: function (language) {
    return this.find({
      $or: [
        { title: new RegExp(language, "i") } ,
        { description: new RegExp(language, "i") },
      ],
    });
  },
};

module.exports = todoSchema;
