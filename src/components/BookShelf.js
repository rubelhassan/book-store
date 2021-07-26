import Book from "./Book.js";

const BookShelf = () => {
  return (
    <div className="books-container">
      <section className="books-header-section">
        <div className="books-count">
          <span>5 book(s) found.</span>
        </div>
        <div className="books-sort">
          <span>Order by: </span>
          <select className="card-select">
            <option>Select</option>
            <option value="price">Price: lowest to highest</option>
            <option value="date">Publish: latest to oldest</option>
          </select>
        </div>
      </section>

      <section className="books-card-section">
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
};

export default BookShelf;
