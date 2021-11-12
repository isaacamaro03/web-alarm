import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";

const defaultTheme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          color: "hsla(37, 100%, 98%, 0.93)"
        }
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: "8px"
      }
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: "8px",
        lineHeight: "1.25rem"
      }
    }
  },
  palette: {
    background: {
      default: "hsla(37, 10%, 9%, 1)",
      paper: "hsla(37, 10%, 9%, 1)"
    },
    primary: {
      main: "hsla(37, 100%, 65%, 1)"
    },
    secondary: {
      main: "hsla(37, 29%, 70%, 0.99)"
    }
  },
  typography: {
    fontFamily: ["system-ui", "sans-serif"].join(",")
  }
});

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
export { defaultTheme };
