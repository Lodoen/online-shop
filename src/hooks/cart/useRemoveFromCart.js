import useRead from "../storage/useRead";
import useCreate from "../storage/useCreate";

export default function useRemoveFromCart(id) {
  const existingCart = useRead("cart");
  const updatedCart = existingCart.filter((item) => item !== id);
  useCreate("cart", updatedCart);
}
