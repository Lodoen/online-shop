import styled from "styled-components";

export const ProductItemContainer = styled.div`
  border: 1px solid #000;
  display: grid;
  margin-bottom: 20px;

  figure,
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  figure {
    margin: 0;
    max-height: 150px;
  }

  div {
    flex-direction: column;
    padding: 10px 0;
    h2 {
      margin: 0;
    }
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    grid-template-columns: 100px 1fr;
  }
`;
