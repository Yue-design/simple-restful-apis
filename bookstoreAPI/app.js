const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

if (process.env.ENV === "Test") {
  console.log("This is a test");
  const db = mongoose.connect("mongodb://localhost/bookAPI_Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
} else {
  console.log("This is for real.");
  const db = mongoose.connect("mongodb://localhost/bookAPI-prod", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
// const db = mongoose.connect("mongodb://localhost/bookAPI", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const bookRouter = express.Router();

const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");
const bookRouter = require("./routes/bookRouter")(Book);
// const authorRouter = require('./routes/authorRouter')(Author);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

app.get("/", (req, res, next) => {
  // throw new Error("Something went wrong!");
  res.send("Welcome to Yue's first nodemon API!");
});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error"
    }
  });
});

app.server = app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

module.exports = app;
