import { AppBar, Paper } from "@mui/material";
import Variants from "./variants";

interface HeaderProp {
  page: keyof typeof Variants;
}

const Header = ({ page }: HeaderProp) => {
  return (
    <Paper
      sx={{ flexGrow: 1, position: "fixed", top: 0, left: 0, right: 0 }}
      elevation={1}
    >
      <AppBar
        sx={{
          bgcolor: ({ palette }) => palette.common.white,
          color: ({ palette }) => palette.grey[900],
        }}
      >
        {Variants[page]}
      </AppBar>
    </Paper>
  );
};

export default Header;
