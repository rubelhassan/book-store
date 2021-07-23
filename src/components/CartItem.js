const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-remove">
        <i className="fa fa-trash"></i>
      </div>
      <div className="cart-item-image">
        <img
          src={require("url:../static/books/1.jpg")}
          alt="You Don't Know JS Yet: Get Started"
        />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-title">
          {"You Don't Know JS Yet: Get Started"}
        </p>
        <p className="cart-item-author">
          <small>Yann Martel</small>
        </p>
        <p className="cart-item-quantity">
          <span>
            Quantity x <b>1</b>
          </span>
        </p>
      </div>
      <div className="cart-item-price">
        <div className="cart-item-change">
          <button className="btn-cart-item-change">-</button>
          <button className="btn-cart-item-change">+</button>
        </div>
        <span className="cart-item-price-total">
          <small>৳</small>199
        </span>
      </div>
    </div>
  );
};

export default CartItem;
