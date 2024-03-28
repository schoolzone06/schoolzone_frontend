"use client";
import AppBar from "@/components/AppBar";
import font from "@/styles/font";
import theme from "@/styles/theme";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Detail = () => {
  return (
    <Box height="100vh">
      <AppBar page="community" />
      <Box mt="56px">
        <Box
          width="100vw"
          height="14rem"
          borderBottom={`1px solid ${theme.gray[300]}`}
          p="5px 24px 12px"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Box display="flex" gap="12px">
              <Box
                width="40px"
                height="40px"
                borderRadius="100px"
                bgcolor={theme.gray[400]}
              />
              <Box>
                <Typography sx={{ ...font.Subhead1, color: theme.gray[900] }}>
                  권세원
                </Typography>
                <Typography sx={{ ...font.Caption, color: theme.gray[500] }}>
                  10분 전
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ ...font.Display5 }}>
              공부는 왜 해야하노
            </Typography>
            <Typography sx={{ ...font.Body1 }}>공부는 왜 해야하노</Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "7rem",
              paddingBlock: "12px",
              typography: "button",
              background: theme.secondary,
              ...font.Button,
            }}
          >
            좋아요
            <ThumbUpIcon sx={{ ml: "8px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
