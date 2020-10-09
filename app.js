const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const db = mongoose.connect("mongodb://localhost/bookAPI", { useNewUrlParser: true, useUnifiedTopology: true });

// const bookRouter = express.Router();

const port = process.env.PORT || 3000;
const Book = require("./models/bookModel");
const bookRouter = require('./routes/bookRouter')(Book);
// const authorRouter = require('./routes/authorRouter')(Author);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", bookRouter);

app.get("/", (req, res) => {
      // res.send("Welcome to Yue's first node API!");
      res.send("Welcome to Yue's first nodemon API!");
    });

app.listen(port, () => {
      console.log(`Running on port ${port}`);
    });
