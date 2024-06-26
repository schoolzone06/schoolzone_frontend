"use client";

import AppBar from "@/components/AppBar";
import BottomNavigation from "@/components/BottomNavigation";
import FloatingActionButton from "@/components/FloatingActionButton";
import Menu from "@/components/Menu";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";

const Meal = () => {
  return (
    <Container>
      <AppBar page="meal" />
      <Box mt="57px" pt="24px" boxSizing="border-box">
        <Typography sx={{ typography: "h6" }} align="center">
          2023년 12월 13일 (수) 아침
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "35rem",
            border: "1px solid",
            borderColor: "grey.200",
            mt: "12px",
            borderRadius: "8px",
            display: "flex",
            p: "16px 0",
            alignItems: "center",
          }}
        >
          <IconButton>
            <ArrowBackIosRounded sx={{ color: "grey.900" }} />
          </IconButton>
          <Box width="100%" display="flex" flexDirection="column" gap="8px">
            <Menu
              name="권세원볶음밥"
              ingredients="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingredients="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingredients="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingredients="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingredients="(조개, 대두, 철분, 황, 수은)"
            />
            <Menu
              name="권세원볶음밥"
              ingredients="(조개, 대두, 철분, 황, 수은)"
            />
          </Box>
          <ArrowForwardIosRounded sx={{ color: "grey.900" }} />
        </Box>
      </Box>
      <FloatingActionButton type="calendar" />
      <BottomNavigation />
    </Container>
  );
};

export default Meal;
