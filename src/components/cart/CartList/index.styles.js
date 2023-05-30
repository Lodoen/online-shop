import styled from "styled-components";

export const CartListContainer = styled.div`
  .checkout {
    display: grid;
    padding: 15px;
    border-top: 1px solid;

    button {
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
    }

    div:first-of-type p {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    .checkout {
      align-items: center;
      grid-template-columns: 1fr 1fr;

      div:last-of-type {
        justify-self: end;
      }
    }
  }
`;
