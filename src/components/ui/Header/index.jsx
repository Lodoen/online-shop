import { Link } from "react-router-dom";

import * as S from "./index.styles";
import CartIcon from "../CartIcon";
import Nav from "../Nav";

export default function Header() {
  return (
    <S.Header>
      <div>
        <Link to="/">O-shop</Link>
      </div>
      <Nav />
      <div>
        <CartIcon />
      </div>
    </S.Header>
  );
}
