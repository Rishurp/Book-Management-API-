const booksModel = require("../models/books.model");

module.exports = {
  create: async (req, res) => {
    const { body } = req;
    const requiredKeys = ["author", "title", "summary"];

    if (!requiredKeys.every((key) => key in body)) {
      res.status(400).json({
        success: false,
        message: "Request body must have title, author and summary",
      });
    }
    const bookInstance = new booksModel({ ...body });
    const book = await bookInstance.save();
    return res.status(201).json(book);
  },

  
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const book = await booksModel.findOne({ _id: id });
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      return res.status(200).json(book);
    } catch (error) {
      console.error("Invalid book id:", error);
      return res.status(400).json({ message: "Invalid Book Id" });
    }
  },
  
  findAll: async (req, res) => {
    try {
      const books = await booksModel.find();
      if (books.length === 0) {
        return res.status(200).json({message : "No books yet in the database"});
      }
        return res.status(200).json(books);
    } catch (error) {
      console.error("An error occurred:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const requiredKeys = ["author", "title", "summary"];

    if (!requiredKeys.some((key) => key in body)) {
      res.status(400).json({
        success: false,
        message: "Request body must have either title, author or summary",
      });
    }

    try{
      const updatedBook = await booksModel.findOneAndUpdate(
        { _id: id },
        { $set: body },
        { new: true }
      );
      if (!updatedBook) {
        return res.status(404).json({
          success: false,
          message: "Book Not Found",
        });
      }
      return res.status(200).json(updatedBook);
    }catch(error)
    {
      console.error("Invalid book id:", error);
    return res.status(400).json({ success: false, message: "Invalid Book Id" })
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try{
    const deletedBook = await booksModel.deleteOne({ _id: id });
    return res.status(200).json(deletedBook);
    }catch(error)
    {
      console.error("Invalid book id:", error);
      res.status(400).json({success: false, message : "Invalid Book Id"})
    }
  }
};
