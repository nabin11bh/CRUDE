exports.fetchBooks = async function (req, res) {
  //logic to fetch book from db
  const datas = await fetchBooks.findAll(); //Select *from books

  res.json({
    message: "Books fetches successfully",
    datas, //datas matra lekhda pni hunxa ,key ra value ko name same vara datas : datas
  });
};

exports.addBook = async function (req, res) {
  //logic to add books
  console.log(req.body);
  //const bookName = req.body.bookName;
  // const bookPrice = req.body.bookPrice;
  const { bookName, bookPrice, bookGenre, bookAuthor } = req.body; // destructur gareko

  await books.create({
    bookName,
    price: bookPrice,
    bookAuthor,
    bookGenre,
    // columnName : value
  });

  res.json({
    message: "Books added successfully",
  });
};

exports.deleteBooks = function (req, res) {
  res.json({
    message: "Books deleted successfully",
  });
};

exports.editBook = function (req, res) {
  res.json({
    message: "Books updated successfully",
  });
};
