import { useState } from "react";

import FoundNoCartItem from "../FoundNoCartItem";
import RemoveFromCart from "../RemoveFromCart";

export default function UndefinedCartItem({ id }) {
  const [isInCart, setIsInCart] = useState(true);
  return isInCart ? (
    <div>
      <h2>Error</h2>
      <p>
        We encountered an error when loading cart item <i>{id}</i>
      </p>
      <RemoveFromCart id={id} setIsInCart={setIsInCart} />
    </div>
  ) : (
    <FoundNoCartItem />
  );
}
