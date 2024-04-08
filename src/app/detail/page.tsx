"use client";

import AppBar from "@/components/AppBar";
import font from "@/styles/font";
import theme from "@/styles/theme";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
                borderRadius="100%"
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
        <Box p="20px 24px" boxSizing="border-box">
          <Typography sx={{ ...font.Headline }}>댓글 7140개</Typography>
          <Box display="flex" gap="12px">
            <Box
              width="40px"
              height="40px"
              borderRadius="100%"
              bgcolor={theme.gray[400]}
            />
            <Box display="flex" gap="12px">
              <Typography sx={{ ...font.Subhead1, color: theme.gray[900] }}>
                권세원(작성자)
              </Typography>
              <Typography sx={{ ...font.Caption, color: theme.gray[500] }}>
                2초전
              </Typography>
            </Box>
          </Box>
          <Box width="100%" pl="54px" boxSizing="border-box">
            <Typography sx={{ ...font.Body2, color: theme.gray[900] }}>
              말같지않은소리마라~ 말같은소리만해라!교도소에서 먹었던 뜨끈~한
              보신탕이 생각나는구만~~ 후루루짭짭 짭짭쓰~~~~!
            </Typography>
            <Box display="flex" gap="25px">
              <Box
                display="flex"
                sx={{ ...font.Caption }}
                color={theme.gray[900]}
                gap="8px"
              >
                <ThumbUpOffAltIcon sx={{ width: "16px", height: "16px" }} />
                12
              </Box>
              <Box
                display="flex"
                sx={{ ...font.Caption }}
                color={theme.gray[900]}
                gap="8px"
              >
                <CommentIcon sx={{ width: "16px", height: "16px" }} />
                답글 남기기
              </Box>
            </Box>
            <Box>
              <Box display="flex" alignItems="center" gap="8px">
                <IconButton sx={{ color: theme.secondary }}>
                  <ArrowDropDownIcon />
                </IconButton>
                <Typography sx={{ color: theme.secondary, ...font.Caption }}>
                  답글 1개
                </Typography>
              </Box>
              <Box width="100%" p="0 12px">
                <Box display="flex" gap="12px" alignItems="center">
                  <Box
                    width="24px"
                    height="24px"
                    bgcolor={theme.gray[200]}
                    borderRadius="100%"
                  />
                  <Typography sx={{ ...font.Subhead1, color: theme.gray[900] }}>
                    이희성
                  </Typography>
                  <Typography sx={{ ...font.Caption, color: theme.gray[500] }}>
                    12분 전
                  </Typography>
                </Box>
                <Box width="100%" pl="40px" boxSizing="border-box">
                  <Typography sx={{ ...font.Body2, color: theme.gray[900] }}>
                    말같지않은소리마라~ 말같은소리만해라!교도소에서 먹었던
                    뜨끈~한 보신탕이 생각나는구만~~ 후루루짭짭 짭짭쓰~~~~!
                  </Typography>
                  <Box display="flex" gap="25px">
                    <Box
                      display="flex"
                      sx={{ ...font.Caption }}
                      color={theme.gray[900]}
                      gap="8px"
                    >
                      <ThumbUpOffAltIcon
                        sx={{ width: "16px", height: "16px" }}
                      />
                      12
                    </Box>
                    <Box
                      display="flex"
                      sx={{ ...font.Caption }}
                      color={theme.gray[900]}
                      gap="8px"
                    >
                      <CommentIcon sx={{ width: "16px", height: "16px" }} />
                      답글 남기기
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Detail;
