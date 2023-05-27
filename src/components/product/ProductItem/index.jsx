import { Link } from "react-router-dom";

import * as S from "./index.styles";

export default function ProductItem({ id, title, discountedPrice, imageUrl }) {
  return (
    <S.ProductItemContainer>
      <figure>
        <img src={imageUrl} alt="Product showcase" />
      </figure>
      <div>
        <h2>{title}</h2>
        <p>{discountedPrice} kr</p>
        <Link to={`/product/${id}`}>View product &gt;&gt;</Link>
      </div>
    </S.ProductItemContainer>
  );
}
