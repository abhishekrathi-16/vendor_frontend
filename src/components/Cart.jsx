import React from "react";
import { useNavigate } from "react-router-dom";
import useInventoryStore from "../store/inventoryStore";
import CartTable from "./CartTable";

const Cart = ({ isOpen, closeModal }) => {
  const cart = useInventoryStore((state) => state.cart);
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/payment");
  };
  if (!isOpen) return null;
  return (
    <div className="cart">
      <div className="modal-overlay">
        <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
          <h2 style={{ margin: "10px" }}>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p style={{ margin: "20px" }}>Your cart is empty!</p>
          ) : (
            <div>
              <CartTable />
              <button onClick={handleBuy}>Proceed to Buy</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
