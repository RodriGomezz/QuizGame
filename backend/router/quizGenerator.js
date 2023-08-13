const express = require("express");
const router = express();
const { quizGeneratorCtrl } = require("../controller/quizGenerator");

router.put("/quizGenerator", quizGeneratorCtrl);

module.exports = router;
