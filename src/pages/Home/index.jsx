import { useState } from "react";

import useApi from "../../hooks/api/useApi";
import ProductList from "../../components/product/ProductList";
import FoundNoProduct from "../../components/product/FoundNoProduct";
import useFilterProducts from "../../hooks/useFilterProducts";
import { Container } from "./index.styles";
import Loading from "../../components/Loading";

export default function Home() {
  const { data, isLoading, isError } = useApi();

  const [search, setSearch] = useState("");
  let products = [];

  if (isLoading) {
    return <Loading />;
  } else {
    products = useFilterProducts(search, [...data]);
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <Container>
      <h1>Home page</h1>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        name="search"
        placeholder="Search ..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      {products.length ? <ProductList products={products} /> : <FoundNoProduct />}
    </Container>
  );
}
