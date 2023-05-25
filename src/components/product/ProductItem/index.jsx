import { Link } from "react-router-dom";

export default function ProductItem(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <Link to={`/product/${props.id}`}>View product</Link>
    </div>
  );
}
