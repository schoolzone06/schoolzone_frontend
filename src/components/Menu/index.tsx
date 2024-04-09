import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";

interface MenuType {
  name: string;
  ingredients: string;
}

const Menu = ({ name, ingredients: ingredients }: MenuType) => {
  return (
    <Box textAlign="center">
      <Typography color={theme.gray[950]} sx={{ typography: "body1" }}>
        {name}
      </Typography>
      <Typography color={theme.gray[700]} sx={{ typography: "caption" }}>
        {ingredients}
      </Typography>
    </Box>
  );
};

export default Menu;
