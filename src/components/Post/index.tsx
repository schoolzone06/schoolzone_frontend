import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import React from "react";

const Post = () => {
  return (
    <Box
      width="100%"
      height="7rem"
      p="12px 24px"
      boxSizing="border-box"
      borderBottom={`1px solid ${theme.gray[300]}`}
    >
      <Typography sx={{ typography: "subtitle1" }}>
        대충제목이라는뜻의제목을지어보았습니다
      </Typography>
      <Typography
        sx={{
          typography: "body2",
          wordBreak: "keep-all",
          width: "50%",
          color: theme.gray[500],
        }}
      >
        대충설명이라는뜻의설명을적을것입니다 하하하하하권세원원
      </Typography>
      <Box display="flex" width="100%" justifyContent="space-between" mt="4px">
        <Typography sx={{ typography: "caption", color: theme.gray[300] }}>
          익명 | 2023일 전
        </Typography>
        <Box display="flex" alignItems="center" gap="2px">
          <ThumbUpOffAltIcon
            sx={{ width: "16px", color: theme.gray[800], mr: "1px" }}
          />
          <Typography sx={{ typography: "caption" }}>0</Typography>
          <CommentOutlinedIcon
            sx={{ width: "16px", color: theme.gray[800], mr: "1px" }}
          />
          <Typography sx={{ typography: "caption" }}>0</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
