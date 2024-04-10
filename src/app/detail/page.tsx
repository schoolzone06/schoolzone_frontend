"use client";

import AppBar from "@/components/AppBar";
import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  ThumbUp,
  ThumbUpOffAlt,
  Comment,
  ArrowDropDown,
} from "@mui/icons-material";

const DetailPage = () => {
  return (
    <Box height="100vh">
      <AppBar page="community" />
      <Box mt="56px">
        <Box
          width="100vw"
          height="14rem"
          borderBottom="1px solid"
          borderColor="gray.300"
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
                bgcolor="grey.400"
              />
              <Box>
                <Typography sx={{ typography: "subtitle1", color: "grey.900" }}>
                  권세원
                </Typography>
                <Typography sx={{ typography: "caption", color: "grey.500" }}>
                  10분 전
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ typography: "h5" }}>
              공부는 왜 해야하노
            </Typography>
            <Typography sx={{ typography: "body1" }}>
              공부는 왜 해야하노
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "7rem",
              paddingBlock: "12px",
              typography: "button",
              background: "secondary",
            }}
          >
            좋아요
            <ThumbUp sx={{ ml: "8px" }} />
          </Button>
        </Box>
        <Box p="20px 24px" boxSizing="border-box">
          <Typography sx={{ typography: "h6" }}>댓글 7140개</Typography>
          <Box display="flex" gap="12px">
            <Box
              width="40px"
              height="40px"
              borderRadius="100%"
              bgcolor="grey.400"
            />
            <Box display="flex" gap="12px">
              <Typography sx={{ typography: "subtitle1", color: "grey.900" }}>
                권세원(작성자)
              </Typography>
              <Typography sx={{ typography: "caption", color: "grey.500" }}>
                2초전
              </Typography>
            </Box>
          </Box>
          <Box width="100%" pl="54px" boxSizing="border-box">
            <Typography sx={{ typography: "body2", color: "grey.900" }}>
              말같지않은소리마라~ 말같은소리만해라!교도소에서 먹었던 뜨끈~한
              보신탕이 생각나는구만~~ 후루루짭짭 짭짭쓰~~~~!
            </Typography>
            <Box display="flex" gap="25px">
              <Box
                display="flex"
                sx={{ typography: "caption" }}
                color="grey.900"
                gap="8px"
              >
                <ThumbUpOffAlt sx={{ width: "16px", height: "16px" }} />
                12
              </Box>
              <Box
                display="flex"
                sx={{ typography: "caption" }}
                color="grey.900"
                gap="8px"
              >
                <Comment sx={{ width: "16px", height: "16px" }} />
                답글 남기기
              </Box>
            </Box>
            <Box>
              <Box display="flex" alignItems="center" gap="8px">
                <IconButton sx={{ color: "secondary.main" }}>
                  <ArrowDropDown />
                </IconButton>
                <Typography
                  sx={{ color: "secondary.main", typography: "caption" }}
                >
                  답글 1개
                </Typography>
              </Box>
              <Box width="100%" p="0 12px">
                <Box display="flex" gap="12px" alignItems="center">
                  <Box
                    width="24px"
                    height="24px"
                    bgcolor="grey.200"
                    borderRadius="100%"
                  />
                  <Typography
                    sx={{ typography: "subtitle1", color: "grey.900" }}
                  >
                    이희성
                  </Typography>
                  <Typography sx={{ typography: "caption", color: "grey.500" }}>
                    12분 전
                  </Typography>
                </Box>
                <Box width="100%" pl="40px" boxSizing="border-box">
                  <Typography sx={{ typography: "body2", color: "grey.900" }}>
                    말같지않은소리마라~ 말같은소리만해라!교도소에서 먹었던
                    뜨끈~한 보신탕이 생각나는구만~~ 후루루짭짭 짭짭쓰~~~~!
                  </Typography>
                  <Box display="flex" gap="25px">
                    <Box
                      display="flex"
                      sx={{ typography: "caption" }}
                      color="grey.900"
                      gap="8px"
                    >
                      <ThumbUpOffAlt sx={{ width: "16px", height: "16px" }} />
                      12
                    </Box>
                    <Box
                      display="flex"
                      sx={{ typography: "caption" }}
                      color="grey.900"
                      gap="8px"
                    >
                      <Comment sx={{ width: "16px", height: "16px" }} />
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
export default DetailPage;
