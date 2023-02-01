import { ThemeProvider } from "styled-components";

import theme from "../theme/default";
import GlobalStyles from "@/styles/global/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
