import { useState } from "react";
import { useParams } from "react-router-dom";

import useApi from "../../hooks/api/useApi";
import useFindInCart from "../../hooks/cart/useFindInCart";
import CutPrice from "../../components/CutPrice";
import AddToCart from "../../components/cart/AddToCart";
import RemoveFromCart from "../../components/cart/RemoveFromCart";
import ReviewList from "../../components/review/ReviewList";
import FoundNoReviews from "../../components/review/FoundNoReviews";
import { Container } from "./index.styles";
import Loading from "../../components/Loading";

export default function Product() {
  let { id } = useParams();

  const { data, isLoading, isError } = useApi(`/${id}`);
  const { discountedPrice, price, title, description, reviews, imageUrl } = data;

  const [isInCart, setIsInCart] = useState(useFindInCart(id));

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading product</div>;
  }

  const discountPercentage = 100 - ((discountedPrice / price) * 100).toFixed(2);

  return (
    <Container>
      <h1>{title}</h1>
      <div className="details">
        <figure>
          <img src={imageUrl} alt="Showcase of product" />
        </figure>
        <div>
          <p>{description}</p>
          {discountPercentage ? <CutPrice price={price} /> : ""}
          <p className="price">
            {discountedPrice}kr {discountPercentage ? `( ${discountPercentage}% off! )` : ""}
          </p>
          {isInCart ? <RemoveFromCart id={id} setIsInCart={setIsInCart} /> : <AddToCart id={id} setIsInCart={setIsInCart} />}
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        {Array.isArray(reviews) && reviews.length ? <ReviewList reviews={reviews} /> : <FoundNoReviews />}
      </div>
    </Container>
  );
}
