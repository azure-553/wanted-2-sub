import { createGlobalStyle } from "styled-components";
import { colors } from "./constants/color";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    background-color: ${colors.blueLight};
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: -webkit-focus-ring-color auto 1px;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }
`;
