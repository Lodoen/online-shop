import styled from "styled-components";

export const Container = styled.section`
  .details {
    display: grid;
    margin-bottom: 50px;
    .price {
      font-size: 1.5rem;
      margin: 20px 0;
    }
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    max-height: 350px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  h2 {
    border-bottom: 1px solid;
    padding-bottom: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    .details {
      grid-template-columns: 200px 1fr;
    }

    .details > div {
      padding-left: 20px;
    }
  }
`;
