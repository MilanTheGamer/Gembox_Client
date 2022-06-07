import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useAtomValue } from "jotai";
import GlobalStyle from "../styles/globalStyle";
import { darkModeAtom } from "../atoms";
import { lightTheme, darkTheme } from "../theme";
import BaseLayout from "../layouts/BaseLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default MyApp;
