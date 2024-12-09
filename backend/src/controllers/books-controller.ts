import { db } from "@/config/database";
import { getFilterQuery } from "@/services/booksService";
import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import * as v from "valibot";
import { schemaAddBook } from "../validation/book-validation";

async function addBook(req: Request, res: Response, next: NextFunction) {
  try {
    const validation = v.parse(schemaAddBook, req.body);

    await db.collection("books").insertOne(validation);
    res.status(200).json({
      message: "Book uploaded successfully",
    });
  } catch (e: unknown) {
    next(e);
  }
}

async function getBooks(req: Request, res: Response, next: NextFunction) {
  try {
    const filter = getFilterQuery(req.query as BooksFeature.FilterQuery);
    const books = await db.collection("books").find(filter).toArray();
    res.status(200).json({
      data: books,
    });
  } catch (e: unknown) {
    next(e);
  }
}

async function updateBook(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params?.id;
    if (!id) {
      throw new Error("Id is required");
    }

    const payload = v.parse(schemaAddBook, req.body);

    const filter = { _id: new ObjectId(id) };
    const updateBook = {
      $set: {
        ...payload,
      },
    };

    const checkBook = await db.collection("books").findOne(filter);
    if (!checkBook) {
      throw new Error("Book not found");
    }

    await db.collection("books").updateOne(filter, updateBook);
    res.status(200).json({
      message: "Book updated successfully",
    });
  } catch (e: unknown) {
    next(e);
  }
}

async function deleteBook(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params?.id;
    const result = await db.collection("books").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      throw new Error("Book not found");
    }

    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (e: unknown) {
    next(e);
  }
}

export default {
  addBook,
  getBooks,
  updateBook,
  deleteBook
};
