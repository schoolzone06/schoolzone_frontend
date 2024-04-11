import { ThemeProvider } from "@mui/material";
import muiTheme from "@/styles/muiTheme";

const MuiThemeProvider = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
