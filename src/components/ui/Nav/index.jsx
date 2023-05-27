import { Link } from "react-router-dom";

import * as S from "./index.styles";

export default function Nav() {
  return (
    <S.Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </S.Nav>
  );
}
