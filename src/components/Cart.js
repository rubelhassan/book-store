import CartItem from "./CartItem";
import { useState } from "react";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <section className={cartOpen ? "cart cart-open" : "cart"}>
      {!cartOpen && (
        <div className="cart-trolley cart-closed">
          <button onClick={() => toggleCart()}>
            <span className="cart-trolley-quantity">0</span>
          </button>
        </div>
      )}

      <div className="cart-content">
        <div className="close-cart">
          <button onClick={() => toggleCart()}>
            <i className="fa fa-close fa-lg"></i>
          </button>
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
