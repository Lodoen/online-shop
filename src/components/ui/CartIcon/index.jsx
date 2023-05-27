import { useContext } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";

import { CartLengthContext } from "../../Layout";
import { CartIconContainer } from "./index.styles";

export default function CartIcon() {
  const { itemsInCart } = useContext(CartLengthContext);
  return (
    <CartIconContainer>
      <Link to="/checkout">
        <RiShoppingCartFill />
        <span>( {itemsInCart} )</span>
      </Link>
    </CartIconContainer>
  );
}
