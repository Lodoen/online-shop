import { useContext } from "react";

import useRemoveFromCart from "../../../hooks/cart/useRemoveFromCart";
import { CartLengthContext } from "../../Layout";

export default function RemoveFromCart({ id, setIsInCart }) {
  const { setItemsInCart } = useContext(CartLengthContext);
  return (
    <button
      onClick={() => {
        useRemoveFromCart(id);
        setIsInCart(false);
        setItemsInCart((prevState) => prevState - 1);
      }}
    >
      Remove from cart
    </button>
  );
}
