import React, { useState } from "react";
import useInventoryStore from "../store/inventoryStore";

// TODO: fix colour of card, try something other than pink

const ItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const addToCart = useInventoryStore((state) => state.addToCart);
  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(item, quantity);
      setQuantity(0);
    }
  };
  return (
    <div className="item-card">
      <h2 className="item-title">{item.name}</h2>
      <img
        src={item.display_image_url}
        alt={item.name}
        className="item-image"
      />
      <div className="item-price">Rs.{item.price}</div>
      <div className="available_units">
        Available Units: {item.available_units}
      </div>
      <div className="quantity-container">
        <label htmlFor={`quantity-${item.name}`} className="quantity-label">
          Quantity:
        </label>
        <select
          id={`quantity-${item.name}`}
          className="quantity-dropdown"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[...Array(item.available_units).keys()].map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
          <option key={item.available_units} value={item.available_units}>
            {item.available_units}
          </option>
        </select>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
