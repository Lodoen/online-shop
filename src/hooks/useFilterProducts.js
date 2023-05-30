export default function useFilterProducts(search, products) {
  if (!search) {
    return products;
  }
  return products.filter(({ title }) => title.toLowerCase().includes(search.toLowerCase()));
}
