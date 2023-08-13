const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
mongoose.connect(
  `mongodb+srv://Rodri:${process.env.PASSWORD}@cluster0.owrvkng.mongodb.net/QuizGame`,
  // `mongodb+srv://Rodri:@cluster0.lic40na.mongodb.net/QuizGame?retryWrites=true&w=majority`,
  () => {
    console.log("database connected");
  }
);
