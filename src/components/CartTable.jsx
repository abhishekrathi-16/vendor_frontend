import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useInventoryStore from "../store/inventoryStore";

const CartTable = () => {
  const cart = useInventoryStore((state) => state.cart);
  const removeFromCart = useInventoryStore((state) => state.removeFromCart);
  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  return (
    <div className="cart-table-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>Rs.{item.price}</td>
              <td>{item.quantity}</td>
              <td>Rs.{item.price * item.quantity}</td>
              <td
                style={{ cursor: "pointer", color: "red" }}
                onClick={() => removeFromCart(item.name)}
              >
                <DeleteIcon />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total-label">
              Total Price:
            </td>
            <td>Rs.{calculateTotal()}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartTable;
