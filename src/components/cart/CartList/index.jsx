import { useState } from "react";

import CartItem from "../CartItem";

export default function CartList({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div>
      {cart.map((id) => (
        <CartItem key={id} id={id} setTotalPrice={setTotalPrice} />
      ))}
      <p>Total price: {totalPrice}</p>
    </div>
  );
}
