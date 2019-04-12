const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  save: function(req, res) {
    // create an array for search results
    var url =
      "https://www.googleapis.com/books/v1/volumes/" + req.body.params.googleId;
    axios
      .get(url)
      .then(({ data }) => {
        var book = [];
        book.push(
          (bookObj = {
            googleId: data.id,
            title: data.volumeInfo.title,
            authors: data.volumeInfo.authors,
            description: data.volumeInfo.description,
            thumbnail: data.volumeInfo.imageLinks.thumbnail,
            previewLink: data.volumeInfo.previewLink
          })
        );
        db.Book.collection
          .insertOne(book[0])
          .then(console.log("Book Saved"))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Book.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res){
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
