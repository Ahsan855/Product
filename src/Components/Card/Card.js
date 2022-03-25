import React from "react";
import "./Card.css";

const Card = (props) => {
  const { cart } = props;
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <p>order summary in Card</p>
      <h2>Selected Items: {cart.length}</h2>
      <p>Total Price:${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p>
        <strong>Grand Total: ${grandTotal.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Card;
