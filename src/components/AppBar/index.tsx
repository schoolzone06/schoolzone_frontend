import { AppBar as Bar } from "@mui/material";
import Variants from "./variants";

interface AppBarProp {
  page: keyof typeof Variants;
}

const AppBar = ({ page }: AppBarProp) => {
  return (
    <Bar
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        bgcolor: ({ palette }) => palette.common.white,
        color: ({ palette }) => palette.grey[900],
        boxShadow: "unset",
      }}
    >
      {Variants[page]}
    </Bar>
  );
};

export default AppBar;
