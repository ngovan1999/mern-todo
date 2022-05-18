const Book = require("../models/book.model");

const getAllBooks = (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ nobooksfound: "No Books found" }));
};

const getDetailBook = (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ nobookfound: "No Book found" }));
};

const createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    book.userId = req.params.userId;
    await book.save();
    res.json({ book, msg: "Book added successfully" });
  } catch (error) {
    res.status(400).json({ error, msg: "Unable to add this book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const bookupdate = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ book: bookupdate });
  } catch (error) {
    res.status(400).json({ error: "Unable to update the Database" });
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndRemove(req.params.id, req.body);
    res.json({ mgs: "Book entry deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "No such a book" });
  }
};

module.exports = {
  getAllBooks,
  getDetailBook,
  createBook,
  updateBook,
  deleteBook,
};
