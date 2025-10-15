import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, h1, h2, h3, p, ul, li, div, span {
        margin: 0;
        padding: 0;
        border: 0;
        /* background-color: #242424; */
        }

    body{
        font-family: "Helvetica","arial", sans-serif;
        line-height: 1.5;
        padding: 50px;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    ul, ol {
    list-style: none;
    }
`;

export default GlobalStyle;