const { books } = require("../database/connection");

exports.fetchBooks = async function (req, res) {
  //logic to fetch book from db
  const datas = await books.findAll(); //Select *from books

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

exports.deleteBooks = async function (req, res) {
  // kun book delete garne tesko id liney
  const id = req.params.id;
  // id aayepaxi, tyo id ko book delete garne

  await books.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Books deleted successfully",
  });
};

exports.editBook = async function (req, res) {
  //logic to update book
  //kun id ko edit garne, tyo id liney
  const id = req.params.id;
  const { bookName, price, bookAuthor, bookGenre } = req.body;

  await books.update(
    {
      bookName: bookName,
      price: price,
      bookAuthor: bookAuthor,
      bookGenre: bookGenre,
    },
    {
      where: {
        id,
      },
    }
  );

  res.json({
    message: "Books updated successfully",
  });
};

exports.singleFetch = async function (req, res) {
  //first capture what id is sending
  const id = req.params.id;
  const datas = await books.findByPk(id); //always return object
  /* const datass = await books.findAll({
    where: {
      id: id,
    },
  }); */
  // always return array
  res.json({
    message: "single book fetched successfully",
    datas,
  });
};
