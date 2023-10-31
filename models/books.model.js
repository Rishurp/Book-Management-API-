const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

const books = mongoose.model("Book", booksSchema);
module.exports = books;
