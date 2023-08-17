const Book = require("../models/agentModel");

//Ici on a le controlleur de création d'un livre
exports.createBook = async (req, res) => {
  console.log(req.body);
  const fingeReq = req.body.finger
    try {
      const existingAgent = await Book.findOne({ finger: fingeReq });
      if (existingAgent) {
        return res.status(409).json({ message: 'Un agent avec le même "finger" existe déjà.' });
      }
      const newBook = await Book.create(req.body);
      res.status(201).json({
        status: "Agent enregistré avec succès  !",
        newBook,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed",
        code: err.code,
        message: err.message,
      });
    }
  };
  //Le controlleur d'affichage de tous les livres
  exports.getBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json({
        status: "Success",
        numberOfBooks: books.length,
        books,
      });
    } catch (err) {
      res.status(400).json({
        status: "failed",
        message: err.message,
      });
    }
  };
 //Le controlleur d'affichage d'un livre à la fois
exports.getOneBook= async (req, res) => {
        try {
          const book = await Book.findById(req.params.id);
          res.status(200).json({
            status: "success",
            book,
          });
        } catch (err) {
          res.status(400).json({
            status: "failed",
            message: err.message,
          });
        }
      };
//Le controlleur de mise à jour d'un livre

            exports.updateBook = async (req, res) => {
                try {
                const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                });
                res.status(200).json({
                    statusstatus: "success",
                    book,
                });
                } catch (err) {
                res.status(400).json({
                    status: "failed",
                    message: err.message,
                });
                }
            };
                    //Le controlleur de suppression d'un livre

            exports.deleteBook = async (req, res) => {
                try {
                  await Book.findByIdAndDelete(req.params.id);
                  res.status(200).json({
                    status: "book deleted successfully",
                    data: null,
                  });
                } catch (err) {
                  res.status(404).json({
                    status: "not found",
                    message: err.message,
                  });
                }
              };