"use client";
import AppBar from "@/components/AppBar";
import BottomNavigation from "@/components/BottomNavigation";
import FloatingActionButton from "@/components/FloatingActionButton";
import theme from "@/styles/theme";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";

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

const Meal = () => {
  return (
    <Container>
      <AppBar page="meal" />
      <Box mt="57px" pt="24px" boxSizing="border-box">
        <Typography sx={{ typography: "h6" }} align="center">
          2023년 12월 13일 (수) 아침
        </Typography>
        <Box
          width="100%"
          height="35rem"
          border={`1px solid ${theme.gray[200]}`}
          mt="12px"
          borderRadius="8px"
          display="flex"
          p="16px 0"
          alignItems="center"
        >
          <IconButton>
            <ArrowBackIosRounded sx={{ color: theme.gray[900] }} />
          </IconButton>
          <Box width="100%" display="flex" flexDirection="column" gap="8px">
            <Menu
              name="권세원볶음밥"
              ingrediants="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingrediants="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingrediants="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingrediants="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingrediants="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingrediants="(조개, 대두, 철분, 황, 수은)"
            />
          </Box>
          <ArrowForwardIosRounded />
        </Box>
      </Box>
      <FloatingActionButton type="calendar" />
      <BottomNavigation />
    </Container>
  );
};

export default Meal;
