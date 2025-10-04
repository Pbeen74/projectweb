import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function Add_cart() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const disabled = cartCount === 0;

  return (
    <div
      className={`cart_add ${disabled ? "disabled" : ""}`}
      onClick={() => { if (!disabled) navigate("/sumcart"); }}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <div className="cart_icon">
        <img src="cart.svg" alt="cart" />
        {cartCount > 0 && <span className="cart_badge">{cartCount}</span>}
      </div>
    </div>
  );
}

export default Add_cart;
