import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        --color-primary: #2C6E49;
        --color-secondary: #58376E;
        --color-dark: #272727;
        --color-hover: #9360af;
        height: 100%;
    }

    body{
        height: 100%;
        margin: 0;
        font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; 
    }

    main > section{
        max-width: ${({ theme }) => theme.screen.max};;
        margin: 0 auto;
        padding: 0 20px;
    }

    h1{
        font-family: Lucida Bright,Georgia,serif; 
    }

    main a{
        color: #0a5485;
        font-style: italic;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;

export default GlobalStyle;
