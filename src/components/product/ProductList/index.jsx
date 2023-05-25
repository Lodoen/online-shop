import ProductItem from "../ProductItem";

export default function ProductList({ products }) {
  return products.map((product) => <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} />);
}
