import styled from "styled-components";

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      padding: 5px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-bottom: 1px solid #fff;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    ul {
      display: flex;
      flex-direction: row;

      li {
        border-right: 1px solid #fff;
        border-bottom: 0;
      }
    }
  }
`;
