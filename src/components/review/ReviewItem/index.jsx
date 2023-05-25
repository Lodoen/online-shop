export default function ReviewItem(props) {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>Rating: {props.rating} / 5</p>
      <p>{props.description}</p>
    </div>
  );
}
