import useRead from "../storage/useRead";
import useCreate from "../storage/useCreate";

export default function useAddToCart(id) {
  const cart = useRead("cart");
  if (cart) {
    const isInCart = cart.find((item) => item == id);
    if (!isInCart) {
      cart.push(id);
      useCreate("cart", [...cart]);
    }
  } else {
    useCreate("cart", [id]);
  }
}
