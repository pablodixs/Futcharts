import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { defautlTheme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ThemeProvider theme={defautlTheme}>
        <App />
    </ThemeProvider>
);
