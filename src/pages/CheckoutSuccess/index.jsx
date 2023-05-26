import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartLengthContext } from "../../components/Layout";

export default function CheckoutSuccess() {
  localStorage.clear();
  const { setItemsInCart } = useContext(CartLengthContext);

  useEffect(() => {
    setItemsInCart(0);
  }, []);

  return (
    <div>
      <h1>Order was successful</h1>
      <Link to="/">Back to store</Link>
    </div>
  );
}
