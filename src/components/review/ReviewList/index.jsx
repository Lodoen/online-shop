import ReviewItem from "../ReviewItem";

export default function ProductList({ reviews }) {
  return reviews.map((review) => <ReviewItem key={review.id} username={review.username} rating={review.rating} description={review.description} />);
}
