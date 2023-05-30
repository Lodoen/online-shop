import styled from "styled-components";

export const AddToCartButton = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0;
  color: #fff;
  border-radius: 5px;
  font-weight: 750;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
