import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useAtomValue } from "jotai";
import { ErrorBoundary } from "react-error-boundary";
import GlobalStyle from "../styles/globalStyle";
import { darkModeAtom } from "../atoms";
import { lightTheme, darkTheme } from "../theme";
import BaseLayout from "../layouts/BaseLayout";
import { ErrorFallback } from "../components/ErrorFallback";

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useAtomValue(darkModeAtom);
  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
