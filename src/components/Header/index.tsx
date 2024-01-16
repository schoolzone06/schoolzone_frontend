import { AppBar, Paper } from "@mui/material";
import Variants from "./variants";

interface HeaderProp {
  page: keyof typeof Variants;
}

const Header = ({ page }: HeaderProp) => {
  return (
    <Paper sx={{ position: "fixed", top: 0, left: 0, right: 0 }}>
      <AppBar
        sx={{
          bgcolor: ({ palette }) => palette.common.white,
          color: ({ palette }) => palette.grey[900],
          boxShadow: "unset",
          borderBottom: "1px solid",
          borderColor: ({ palette }) => palette.grey[300],
        }}
      >
        {Variants[page]}
      </AppBar>
    </Paper>
  );
};

export default Header;
