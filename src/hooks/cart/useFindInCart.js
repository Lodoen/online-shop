import useRead from "../storage/useRead";

export default function useFindInCart(id) {
  const cart = useRead("cart");
  if (!cart) {
    return false;
  }
  const elementInCart = cart.find((item) => item == id);
  return elementInCart ? true : false;
}
