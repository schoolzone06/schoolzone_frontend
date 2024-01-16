import font from "@/styles/font";
import theme from "@/styles/theme";
import { ArrowBack, Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

interface HeaderType {
  title: string;
}

const Header = ({ title }: HeaderType) => {
  return (
    <Box
      width="100%"
      height="3rem"
      borderBottom={`1px solid ${theme.gray[300]}`}
      position="fixed"
      p="0 24px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxSizing="border-box"
    >
      <button onClick={() => history.back} style={{ background: "none" }}>
        <ArrowBack sx={{ w: "16px" }} />
      </button>
      <Typography sx={{ ...font.Subhead3 }}>{title}</Typography>
      <Search />
    </Box>
  );
};

export default Header;
