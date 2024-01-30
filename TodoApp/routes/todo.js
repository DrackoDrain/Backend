const express = require("express");

const router = express.Router();

// import controller

const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");

// define api routes 

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);

module.exports = router;

