import { useState } from "react";
import { useParams } from "react-router-dom";

import useApi from "../../hooks/api/useApi";
import useFindInCart from "../../hooks/cart/useFindInCart";
import CutPrice from "../../components/CutPrice";
import AddToCart from "../../components/cart/AddToCart";
import RemoveFromCart from "../../components/cart/RemoveFromCart";
import ReviewList from "../../components/review/ReviewList";
import FoundNoReviews from "../../components/review/FoundNoReviews";

export default function Product() {
  let { id } = useParams();

  const { data, isLoading, isError } = useApi(`/${id}`);
  const { discountedPrice, price, title, description, reviews, imageUrl } = data;

  const [isInCart, setIsInCart] = useState(useFindInCart(id));

  if (isLoading) {
    return <div>Loading product</div>;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  const discountPercentage = 100 - ((discountedPrice / price) * 100).toFixed(2);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* <img src={imageUrl} alt="Showcase of product" /> */}
      <p>
        {discountPercentage ? <CutPrice price={price} /> : ""}
        {discountedPrice}kr {discountPercentage ? `( ${discountPercentage}% off! )` : ""}
      </p>
      {isInCart ? <RemoveFromCart id={id} setIsInCart={setIsInCart} /> : <AddToCart id={id} setIsInCart={setIsInCart} />}
      {Array.isArray(reviews) && reviews.length ? <ReviewList reviews={reviews} /> : <FoundNoReviews />}
    </div>
  );
}
