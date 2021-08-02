import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";

const defaultTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          color: "hsl(353deg 20% 40%)",
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "8px",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: "8px",
        lineHeight: "1.25rem",
      },
    },
  },
  palette: {
    background: {
      default: "hsla(0, 50%, 96%, 1)",
      paper: "hsla(0, 50%, 96%, 1)",
    },
    primary: {
      main: "hsl(354, 89%, 55%)",
    },
    secondary: {
      main: "hsl(231, 88%, 58%)",
    },
  },
  typography: {
    fontFamily: ["system-ui", "sans-serif"].join(","),
  },
});

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
export { defaultTheme };
