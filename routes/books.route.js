const express = require("express");
const booksController = require("../controllers/books.controller");

const router = express.Router();

router.get("/", booksController.findAll);
router.get("/:id", booksController.findOne);
router.post("/", booksController.create);
router.patch("/:id", booksController.update);
router.delete("/:id", booksController.delete);

module.exports = router;
