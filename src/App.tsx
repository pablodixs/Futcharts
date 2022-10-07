import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";

import { defautlTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defautlTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
