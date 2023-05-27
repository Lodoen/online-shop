import { useState } from "react";

import FoundNoCartItem from "../FoundNoCartItem";
import RemoveFromCart from "../RemoveFromCart";
import { UndefinedCartItemContainer } from "./index.styles";

export default function UndefinedCartItem({ id }) {
  const [isInCart, setIsInCart] = useState(true);
  return isInCart ? (
    <UndefinedCartItemContainer>
      <figure></figure>
      <div>
        <h2>Error</h2>
        <p>
          We encountered an error when loading cart item <i>{id}</i>
        </p>
      </div>
      <div>
        <RemoveFromCart id={id} setIsInCart={setIsInCart} />
      </div>
    </UndefinedCartItemContainer>
  ) : (
    <FoundNoCartItem />
  );
}
