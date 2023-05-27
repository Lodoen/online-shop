import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import RouteNotFound from "./pages/RouteNotFound";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}
