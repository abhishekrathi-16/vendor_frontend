import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useInventoryStore from "../store/inventoryStore";
import { buyItems } from "../api";

const Payment = () => {
  const cart = useInventoryStore((state) => state.cart);
  const clearCart = useInventoryStore((state) => state.clearCart);
  const navigate = useNavigate();

  // const totalPrice
  const [totalPrice, setTotalPrice] = useState(0);
  const getTotalPrice = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotalPrice(sum);
  };
  
  const handlePayment = async () => {
    await buyItems(cart);
    clearCart();
    navigate("/success");
  };

  useEffect(()=>{
    getTotalPrice();
  })
  return (
    <div className="payment">
      <h2 style={{margin:"10px"}}>Process Payment</h2>
      <h3 style={{margin:"10px"}}>Total Cost: Rs.{totalPrice}</h3>
      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
};

export default Payment;
