import React, { useState } from "react";
import ItemList from "../components/ItemList";
import Cart from "../components/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HomePage = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  return (
    <div className="home-page">
      <ItemList />
      <div className="cart-button">
        <button onClick={openCart} style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <ShoppingCartIcon />
        </button>
      </div>
      <Cart isOpen={isCartOpen} closeModal={closeCart} />
    </div>
  );
};

export default HomePage;
