import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useAtomValue } from "jotai";
import { ErrorBoundary } from "react-error-boundary";
import GlobalStyle from "../styles/globals";
import { darkModeAtom } from "../atoms";
import { lightTheme, darkTheme } from "../theme";
import BaseLayout from "../layouts/BaseLayout";
import { ErrorFallback } from "../components/ErrorFallback";

function MyApp({ Component, pageProps }: AppProps) {
  const darkMode = useAtomValue(darkModeAtom);

  // eslint-disable-next-line
  const StyledThemeProvider = (props: any) => {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme} {...props} />
    );
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StyledThemeProvider>
        <GlobalStyle />
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </StyledThemeProvider>
    </ErrorBoundary>
  );
}

export default MyApp;
