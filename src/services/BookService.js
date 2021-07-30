export class BookService {
  async findBooks(name, author) {
    const res = await fetch("api/books/search", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        author: author,
      }),
    });
    return await res.json();
  }
}
