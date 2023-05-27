import { ThemeProvider } from "styled-components";

const theme = {
  screen: {
    max: "800px",
    small: "450px",
  },
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    dark: "var(--color-dark)",
    hover: "var(--color-hover)",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
