const express = require("express");
const router = express.Router();

const {
    createBook,
    getBooks,
    getOneBook,
    updateBook,
    deleteBook,

  } = require("../controllers/agentController");

  router.route("/").get(getBooks).post(createBook);
  router
  .route("/:id")
  .get(getOneBook)
  .patch(updateBook)
  .delete(deleteBook);


module.exports = router;