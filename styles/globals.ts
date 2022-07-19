import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "../theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeInterface }>`
  /* SETTINGS FONTS */
  @font-face {
      font-family: 'Celias';
      src:  url("/fonts/Celias/Celias.ttf") format('truetype');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'Celias';
      src:  url("/fonts/Celias/Celias-Medium.ttf") format('truetype');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'Celias';
      src:  url("/fonts/Celias/Celias-Bold.ttf") format('truetype');
      font-weight: 700;
      font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.background};
    font-family: Celias, 'Open Sans', sans-serif ;
    color: ${({ theme }) => theme.onSurface}
  }
`;

export default GlobalStyle;
