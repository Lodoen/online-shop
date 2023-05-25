import { useState } from "react";

import useApi from "../../hooks/api/useApi";
import ProductList from "../../components/product/ProductList";
import FoundNoProduct from "../../components/product/FoundNoProduct";
import useFilterProducts from "../../hooks/useFilterProducts";

export default function Home() {
  const { data, isLoading, isError } = useApi();

  const [search, setSearch] = useState("");
  let products = [];

  if (isLoading) {
    return <div>Loading products</div>;
  } else {
    products = useFilterProducts(search, [...data]);
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
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
    </div>
  );
}
