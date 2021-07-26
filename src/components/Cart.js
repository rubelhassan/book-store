import CartItem from "./CartItem";

const Cart = (props) => {
  const isOpen = props.isOpen;
  return (
    <section className={isOpen ? "cart cart-open" : "cart"}>
      {!isOpen && (
        <div className="cart-trolley cart-closed">
          <span className="cart-trolley-quantity">0</span>
        </div>
      )}

      <div className="cart-content">
        <div className="close-cart">
          <i className="fa fa-close fa-lg"></i>
        </div>
        <div className="cart-header">
          <h5 className="header-title">Cart</h5>
          <span>(10 items)</span>
          <p className="divider"></p>
        </div>

        <div className="cart-items">
          {/* <p className="cart-empty">
              Add some products in the cart <br />
              :)
            </p> */}
          <CartItem />
        </div>

        <div className="cart-footer">
          <div className="total">
            <p>TOTAL</p>
          </div>
          <div className="total-price">
            <p className="total-price-val">
              <small>৳</small>10.00
            </p>
          </div>
          <div className="btn-buy reverse-accent">Checkout</div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
