import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ user, _cartItems }) => {
    const navigate = useNavigate()
  return (
    <section>
      <h1>Checkout</h1>
      { _cartItems ? (
        <div className="cart-summary-cont">
          <h2>Total: ${_cartItems.totalAmount.toFixed(2)}</h2>
          <h5>Shipping cost: $0</h5>
          <h5>Total Items: {_cartItems.numberOfItems}</h5>
          <h5>
            Shipping Address:{" "}
            <span>
              {user.address.city} {user.address.street}{" "}
            </span>
          </h5>
          <h5>
            Biller:{" "}
            <span>
              {user.name.firstName} {user.name.lastName}
            </span>
          </h5>
          <button
            style={{ alignSelf: "center", width: "100%" }}
          >
            Pay Now
          </button>
        </div>
      ) : (
        <h2>No Items</h2>
      )}
    </section>
  );
};

export default Checkout;
