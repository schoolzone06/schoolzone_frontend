import { AppBar as Bar, Paper } from "@mui/material";
import Variants from "./variants";

interface AppBarProp {
  page: keyof typeof Variants;
}

const AppBar = ({ page }: AppBarProp) => {
  return (
    <Paper sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10 }}>
      <Bar
        sx={{
          bgcolor: ({ palette }) => palette.common.white,
          color: ({ palette }) => palette.grey[900],
          boxShadow: "unset",
        }}
      >
        {Variants[page]}
      </Bar>
    </Paper>
  );
};

export default AppBar;
