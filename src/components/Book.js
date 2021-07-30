const Book = () => {
  return (
    <div className="book-card card">
      <div className="book-info">
        <div className="book-tag-discount">
          <b>5%</b> Discount
        </div>
        <div className="book-card-image">
          <img
            src={require("url:../static/books/1.jpg")}
            alt="You Don't Know JS Yet: Get Started"
          />
        </div>
        <p className="book-title">{"You Don't Know JS Yet: Get Started"}</p>
        <span className="book-author">Kyle Simpson</span>
        <div>
          <div className="book-card-price">
            <span className="price-original">
              <small>৳</small>220
            </span>
            <span className="price-discount">
              <small> ৳</small>199
            </span>
          </div>
        </div>
      </div>
      <div className="btn-buy">Add to cart</div>
    </div>
  );
};

export default Book;
