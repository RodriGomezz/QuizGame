const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const quizGenerator = require("./router/quizGenerator");
require("./config/db");

app.use(cors());
app.use(express.text());

app.use(quizGenerator);

app.listen(port, () => {
  console.log(`server listen on port ${port}`);
});
