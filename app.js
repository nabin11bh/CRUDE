const express = require("express");
const { books } = require("./database/connection");
const {
  fetchBooks,
  addBook,
  deleteBooks,
  editBook,
} = require("./controllers/bookController");
const app = express();
require("./database/connection");
app.use(express.json()); // postman bata  data pathako bujauna yo lekhnai parxa

const bookRoute = require("./routes/bookRoute");

//localhost:3000/api/ + /books = localhost:3000/api/books
app.use("/api/", bookRoute);

app.listen(3000, function () {
  console.log("server/backend/node project has strated at port 3000");
});
