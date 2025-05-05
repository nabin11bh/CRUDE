const {
  fetchBooks,
  addBook,
  deleteBooks,
  editBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.route("/books").get(fetchBooks).post(addBook);
router.route("/books/:id").delete(deleteBooks).patch(editBook);

//router.get("/books", fetchBooks);
//router.post("/books/:id", addBook);
//router.delete("/books/:id", deleteBooks);

module.exports = router; //multiple export garda matra {} halne
