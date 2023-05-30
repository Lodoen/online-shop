import { ReviewItemContainer } from "./index.styles";

export default function ReviewItem(props) {
  return (
    <ReviewItemContainer>
      <h3>{props.username}</h3>
      <p>Rating: {props.rating} / 5</p>
      <p>{props.description}</p>
    </ReviewItemContainer>
  );
}
