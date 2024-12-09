import * as v from "valibot";

const schemaAddBook = v.object({
  authorName: v.pipe(
    v.string(),
    v.minLength(1),
    v.minLength(1, "Author name is required")
  ),
  imageURL: v.pipe(
    v.string(),
    v.startsWith("https://", "Image URL must start with https://"),
    v.minLength(1, "Image URL is required")
  ),
  category: v.pipe(v.string(), v.nonEmpty("Category is required")),
  bookDescription: v.pipe(
    v.string(),
    v.minLength(1, "Book description is required")
  ),
  bookTitle: v.pipe(v.string(), v.minLength(1, "Book title is required")),
  bookPDFURL: v.pipe(v.string(), v.minLength(1, "Book PDF URL is required")),
});

export type TSchemaAddBook = v.InferOutput<typeof schemaAddBook>;

export { schemaAddBook };

