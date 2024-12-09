import booksController from "@/controllers/books-controller";
import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hello World! sd");
});

route.get("/books", booksController.getBooks);
route.post("/books", booksController.addBook);
route.patch("/books/:id", booksController.updateBook);
route.delete("/books/:id", booksController.deleteBook);

export default route;
