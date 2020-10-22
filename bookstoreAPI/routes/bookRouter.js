/* eslint-disable no-param-reassign */
const express = require("express");
const booksController = require("../controllers/booksController");

function routes(Book) {
  const bookRouter = express.Router();
  const controller = booksController(Book);
  bookRouter
    .route("/books")
    .post(controller.post)
    .get(controller.get);
  bookRouter.use("/books/:bookId", (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      if (book) {
        req.book = book;
        return next();
      }
      // return res.json(book);
      return res.sendStatus(404);
    });
  });
  bookRouter
    .route("/books/:bookId")
    // .post((req, res) => {
    //   const book = new Book(req.body);
    //   // console.log(book);
    //   book.save();
    //   return res.status(201).json(book);
    // })
    // .get((req, res) =>
    // const response = { hello: 'This is my API' };
    // Book.findById(req.params.bookId, (err, book) => {
    //   if (err) {
    //     return res.send(err);
    //   }
    //   return res.json(book);
    .get((req, res) =>
      res
        .json(req.book)
        //     // res.json(response);
        //   });
        .put((req, res) => {
          // Book.findById(req.params.bookId, (err, book) => {
          //   if (err) {
          //     return res.send(err);
          //   }
          const { book } = req;
          book.title = req.body.title;
          book.author = req.body.author;
          book.genre = req.body.genre;
          book.read = req.body.read;
          // book.save();
          req.book.save(err => {
            if (err) {
              return res.send(err);
            }
            return res.json(book);
          });
          // return res.json(book);
        })
        .patch((req, res) => {
          // Book.findById();
          const { book } = req;
          // eslint-disable-next-line no-underscore-dangle
          if (req.body._id) {
            // eslint-disable-next-line no-underscore-dangle
            delete req.body._id;
          }
          Object.entries(req.body).forEach(item => {
            const key = item[0];
            const value = item[1];
            book[key] = value;
          });
          req.book.save(err => {
            if (err) {
              return res.send(err);
            }
            return res.json(book);
          });
        })
    )
    .delete((res, req) => {
      req.book.remove(err => {
        if (err) {
          return res.send(err);
        }
        return res.sendStatus(204);
      });
    });
  return bookRouter;
}
module.exports = routes;
