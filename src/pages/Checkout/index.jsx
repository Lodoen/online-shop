import CartList from "../../components/cart/CartList";
import FoundNoCart from "../../components/cart/FoundNoCart";
import useRead from "../../hooks/storage/useRead";

export default function Checkout() {
  const cart = useRead("cart");

  return (
    <section>
      <h1>Checkout</h1>
      {Array.isArray(cart) && cart.length ? <CartList cart={cart} /> : <FoundNoCart />}
    </section>
  );
}
