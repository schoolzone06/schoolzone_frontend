import Comment from "@/assets/svgs/Comment";
import Like from "@/assets/svgs/Like";
import font from "@/styles/font";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

const PostContent = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "5.5rem",
        borderBottom: `1px solid ${theme.gray[300]}`,
        padding: "12px 24px",
        boxSizing: "border-box",
      }}
    >
      {/*title*/}
      <Typography sx={{ ...font.Subhead1 }}>공부는 왜해야하노</Typography>
      {/*description*/}
      <Typography sx={{ ...font.Body2, color: theme.gray[500] }}>
        이희성
      </Typography>
      {/*info*/}
      <Box display="flex" justifyContent="space-between">
        <Typography color={theme.gray[300]} sx={{ ...font.Caption }}>
          익명 | 2023일 전
        </Typography>
        <Box display="flex" gap="4px" alignItems="center">
          <Like />
          <Typography color={theme.gray[800]} sx={{ ...font.Caption }}>
            0
          </Typography>
          <Comment />
          <Typography color={theme.gray[800]} sx={{ ...font.Caption }}>
            0
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default PostContent;
