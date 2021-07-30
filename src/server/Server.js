import { createServer } from "miragejs";
import books from "./data/books.json";

export default function mockServer() {
  createServer({
    routes() {
      this.get("/api/books", () => {
        return {
          data: {
            total: books.length,
            books: books,
          },
        };
      });

      this.get("/api/books/:id", (schema, request) => {
        return {
          book: books[request.params.id],
        };
      });

      this.post("/api/books/search", (schema, request) => {
        const params = JSON.parse(request.requestBody);
        let matchedBooks = [];
        for (const book of books) {
          if (
            params.name &&
            book.name.toLowerCase().includes(params.name.toLowerCase())
          ) {
            matchedBooks.push(book);
            continue;
          }

          if (
            params.author &&
            book.author.toLowerCase().includes(params.author.toLowerCase())
          ) {
            matchedBooks.push(book);
            continue;
          }
        }

        return {
          data: {
            total: matchedBooks.length,
            books: matchedBooks,
          },
        };
      });
    },
  });
}
