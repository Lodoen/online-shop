import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../ui/Header";
import Footer from "../ui/Footer";
import useRead from "../../hooks/storage/useRead";

export const CartLengthContext = createContext();

export default function Layout() {
  const cart = useRead("cart");
  const [itemsInCart, setItemsInCart] = useState(Array.isArray(cart) && cart.length ? cart.length : 0);
  return (
    <CartLengthContext.Provider value={{ itemsInCart, setItemsInCart }}>
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    </CartLengthContext.Provider>
  );
}
