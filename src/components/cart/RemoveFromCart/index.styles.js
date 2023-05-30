import styled from "styled-components";
import { AddToCartButton } from "../AddToCart/index.styles";

export const RemoveFromCartButton = styled(AddToCartButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 1.5rem;
  }
`;
