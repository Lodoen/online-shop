import { Link } from "react-router-dom";
import { useState } from "react";

import RemoveFromCart from "../RemoveFromCart";
import FoundNoCartItem from "../FoundNoCartItem";
import { CartItemContainer } from "./index.styles";

export default function CartItem({ id, title, discountedPrice, setTotalPrice, imageUrl }) {
  const [isInCart, setIsInCart] = useState(true);
  return isInCart ? (
    <CartItemContainer>
      <figure>
        <img src={imageUrl} alt="Product showcase" />
      </figure>
      <div>
        <h2>{title}</h2>
        <p>Price: {discountedPrice}kr</p>
        <Link to={`/product/${id}`}>View product &gt;&gt;</Link>
      </div>
      <div>
        <RemoveFromCart id={id} setIsInCart={setIsInCart} totalPrice={{ setTotalPrice, discountedPrice }} />
      </div>
    </CartItemContainer>
  ) : (
    <FoundNoCartItem />
  );
}
