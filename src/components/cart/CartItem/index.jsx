import { Link } from "react-router-dom";
import { useState } from "react";

import RemoveFromCart from "../RemoveFromCart";
import FoundNoCartItem from "../FoundNoCartItem";

export default function CartItem({ id, title, discountedPrice, setTotalPrice }) {
  const [isInCart, setIsInCart] = useState(true);

  return isInCart ? (
    <div>
      <h2>{title}</h2>
      <p>Price: {discountedPrice}kr</p>
      <Link to={`/product/${id}`}>View product</Link>
      <RemoveFromCart id={id} setIsInCart={setIsInCart} totalPrice={{ setTotalPrice, discountedPrice }} />
    </div>
  ) : (
    <FoundNoCartItem />
  );
}
