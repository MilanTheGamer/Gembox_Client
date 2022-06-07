import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "../theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeInterface }>`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: ${({ theme }) => theme.onSurface}
  }
`;

export default GlobalStyle;
