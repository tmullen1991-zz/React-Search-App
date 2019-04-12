const router = require("express").Router();
const axios = require("axios");
const booksController = require("../../controllers/booksController");

router.get("/search", (req, res) => {
  var url = "https://www.googleapis.com/books/v1/volumes?q=" + req.query.q;
  axios
    .get(url)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(err => res.status(422).json(err));
});
router
  .route("/book")
  .get(booksController.findAll)
  .post(booksController.save);

router.route("/book/:id").delete(booksController.remove);

module.exports = router;
