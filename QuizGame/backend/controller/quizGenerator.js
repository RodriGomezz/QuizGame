const quizzes = require("../models/quiz");

exports.quizGeneratorCtrl = async (req, res) => {
  const quizSelector = req.body;
  const quiz = await quizzes.findOne({ option: quizSelector });
  return res.status(200).json(quiz);
};
