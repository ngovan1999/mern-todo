// routes/api/books.js

const express = require("express");
const Book = require("../models/book.model");
const router = express.Router();
const controller = require("../controllers/book.controller");
// @route GET api/books
// @description Get all books
// @access Public
router.get("/", controller.getAllBooks);

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get("/:id", controller.getDetailBook);

// @route GET api/books
// @description add/save book
// @access Public
router.post("/", controller.createBook);

// @route GET api/books/:id
// @description Update book
// @access Public
router.put("/:id", controller.updateBook);

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete("/:id", controller.deleteBook);

module.exports = router;
