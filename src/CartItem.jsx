import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem } from "./CartSlice";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Total items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Total cost
  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Cost: ${totalCost}</h3>

      {cart.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          
          <img src={item.image} alt={item.name} width="100" />
          
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => dispatch(addItem(item))}>+</button>
          <button onClick={() => dispatch(removeItem(item.id))}>-</button>
          <button onClick={() => dispatch(deleteItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <br />

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <button onClick={() => (window.location.href = "/plants")}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;
