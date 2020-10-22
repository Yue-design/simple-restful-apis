function booksController() {
  function post(req, res) {
    const book = new Book(req.body);
    // console.log(book);
    if (!req.body.title) {
      res.status(400);
      return res.send("Title is required");
    }
    book.save();
    res.status(201);
    return res.json(book);
  }
  function get(req, res) {
    // const query = {genre: 'fantasy'}
    // const query = req.query;
    // const {query} = req;
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    // Book.find((err, books) => {
    Book.find(query, (err, books) => {
      // Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
    // res.json(response);
  }
  return { post, get };
}

module.exports = booksController;
