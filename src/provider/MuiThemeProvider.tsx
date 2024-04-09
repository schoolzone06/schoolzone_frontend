import { createTheme, ThemeProvider } from "@mui/material";
import font from "@/styles/font";
import theme from "@/styles/theme";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.primary,
    },
    secondary: {
      main: theme.secondary,
      light: theme.tertiary,
    },
    error: {
      main: theme.error,
    },
    warning: {
      main: theme.warn,
    },
    grey: theme.gray,
    common: {
      black: theme.black,
      white: theme.white,
    },
  },
  typography: {
    fontFamily: "'Pretendard', 'Helvetica Neue', sens-serif",
    h1: font.Display1,
    h2: font.Display2,
    h3: font.Display3,
    h4: font.Display4,
    h5: font.Display5,
    h6: font.Headline,
    subtitle1: font.Subhead1,
    subtitle2: font.Subhead2,
    subtitle3: font.Subhead3,
    body1: font.Body1,
    body2: font.Body2,
    caption: font.Caption,
    button: font.Button,
  },
});

const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
