import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";

interface MenuType {
  name: string;
  ingrediants: string;
}

const Menu = ({ name, ingrediants }: MenuType) => {
  return (
    <Box textAlign="center">
      <Typography color={theme.gray[950]} sx={{ typography: "body1" }}>
        {name}
      </Typography>
      <Typography color={theme.gray[700]} sx={{ typography: "caption" }}>
        {ingrediants}
      </Typography>
    </Box>
  );
};

export default Menu;
