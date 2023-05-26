import { useContext } from "react";

import useRemoveFromCart from "../../../hooks/cart/useRemoveFromCart";
import { CartLengthContext } from "../../Layout";

export default function RemoveFromCart({ id, setIsInCart, totalPrice = undefined }) {
  const { setItemsInCart } = useContext(CartLengthContext);
  return (
    <button
      onClick={() => {
        useRemoveFromCart(id);
        setIsInCart(false);
        setItemsInCart((prevState) => prevState - 1);
        if (totalPrice) {
          const { setTotalPrice, discountedPrice } = totalPrice;
          setTotalPrice((prevState) => prevState - discountedPrice);
        }
      }}
    >
      Remove from cart
    </button>
  );
}
