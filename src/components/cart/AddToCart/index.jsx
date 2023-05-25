import { useContext } from "react";

import useAddToCart from "../../../hooks/cart/useAddToCart";
import { CartLengthContext } from "../../Layout";

export default function AddToCart({ id, setIsInCart }) {
  const { setItemsInCart } = useContext(CartLengthContext);
  return (
    <button
      onClick={() => {
        useAddToCart(id);
        setIsInCart(true);
        setItemsInCart((prevState) => prevState + 1);
      }}
    >
      Add to cart
    </button>
  );
}
