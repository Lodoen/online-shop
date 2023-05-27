import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        --color-primary: #1c606d;
        --color-secondary: red;
        --color-dark: #272727;

        height: 100%;
    }
    body{
        height: 100%;
        margin: 0;
    }
`;

export default GlobalStyle;
