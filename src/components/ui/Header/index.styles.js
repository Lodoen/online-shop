import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5px 0;
  }

  & > div:first-of-type {
    border-bottom: 1px solid #fff;
  }

  a {
    color: #fff;
    text-decoration: none;
    width: 100%;
    padding: 10px 15px;
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screen.small}) {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    padding: 10px 0;

    & > div:first-of-type {
      border-right: 1px solid #fff;
      border-bottom: 0;
    }
  }
`;
