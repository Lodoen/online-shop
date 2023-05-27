import { ThemeProvider } from "styled-components";

const theme = {
  screen: {
    small: "450px",
  },
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    dark: "var(--color-dark)",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
