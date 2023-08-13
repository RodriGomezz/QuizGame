const { Schema, model } = require("mongoose");

const quizSchema = new Schema({
  option: String,
  questions: Object,
  answers: Object,
});

module.exports = model("quizzes", quizSchema);
