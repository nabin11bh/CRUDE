const express = require("express");
const app = express();
require("./database/connection");

app.get("/books", (req, res) => {
  //logic to fetch book from db
  res.json({
    message: "Books fetches successfully",
  });
});

app.post("/books", function (req, res) {
  res.json({
    message: "Books added successfully",
  });
});

app.delete("/books/:id", function (req, res) {
  res.json({
    message: "BOoks deleted successfully",
  });
});

app.patch("/books/:id", function (req, res) {
  res.json({
    message: "BOoks updated successfully",
  });
});

app.listen(3000, function () {
  console.log("server/backend/node project has strated at port 3000");
});
