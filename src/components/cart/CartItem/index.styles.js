import styled from "styled-components";

export const CartItemContainer = styled.div`
  border-top: 1px solid;
  margin-bottom: 20px;
  display: grid;
  padding: 15px;

  div {
    text-align: center;
  }

  div:first-of-type {
    padding: 0 20px;
    margin: 20px 0;
  }

  figure {
    margin: 0;
    max-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  h2 {
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    align-items: center;
    grid-template-columns: 100px 1fr auto;

    div {
      text-align: start;
    }

    div:first-of-type {
      margin: 0;
    }
  }
`;
