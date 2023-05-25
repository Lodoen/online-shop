import { useState, useEffect } from "react";

import useApi from "../../../hooks/api/useApi";
import RemoveFromCart from "../../cart/RemoveFromCart";
import FoundNoCartItem from "../FoundNoCartItem";

export default function CartItem({ id, setTotalPrice }) {
  const { data, isLoading, isError } = useApi(`/${id}`);
  const { discountedPrice, title, description, imageUrl } = data;

  const [isInCart, setIsInCart] = useState(true);

  if (isLoading) {
    return <div>Loading product</div>;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  useEffect(() => {
    setTotalPrice((prevState) => prevState + discountedPrice);
  }, []);

  return isInCart ? (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* <img src={imageUrl} alt="Showcase of product" /> */}
      <p>Price: {discountedPrice}kr</p>
      <RemoveFromCart id={id} setIsInCart={setIsInCart} />
    </div>
  ) : (
    <FoundNoCartItem />
  );
}
