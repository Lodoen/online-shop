import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartLengthContext } from "../../Layout";

export default function CartIcon() {
  const { itemsInCart } = useContext(CartLengthContext);
  return <Link to="/checkout">CART ICON ({itemsInCart})</Link>;
}
