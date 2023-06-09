import { useContext } from "react";
import { TiDelete } from "react-icons/ti";

import useRemoveFromCart from "../../../hooks/cart/useRemoveFromCart";
import { CartLengthContext } from "../../Layout";
import { RemoveFromCartButton } from "./index.styles";

export default function RemoveFromCart({ id, setIsInCart, totalPrice = undefined }) {
  const { setItemsInCart } = useContext(CartLengthContext);
  return (
    <RemoveFromCartButton
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
      {totalPrice ? <TiDelete /> : "Remove from cart"}
    </RemoveFromCartButton>
  );
}
