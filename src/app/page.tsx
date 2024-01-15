"use client";

import Image from "next/image";
import Header from "@/components/Header";
import NavigationBar from "@/components/NavigationBar";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import ClockIcon from "@/assets/ClockIcon.svg";
import PlateIcon from "@/assets/PlateIcon.svg";
import FireIcon from "@/assets/FireIcon.svg";
import { CommentRounded, ThumbUpRounded } from "@mui/icons-material";

export default function Home() {
  return (
    <Container sx={{ pt: "72px", pb: "72px", overflowX: "scroll" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              typography: "subtitle1",
            }}
          >
            <Image src={ClockIcon} alt="clock" />
            오늘의 시간표
          </Box>
          <Box
            sx={{
              p: "8px 12px",
              border: "1px solid",
              borderColor: ({ palette }) => palette.grey[400],
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              typography: "caption",
            }}
          >
            <Chip
              size="small"
              sx={{ typography: "subtitle3" }}
              color="secondary"
              label="2023년 12월 13일 (수) 학교 시간표"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                return (
                  <Box sx={{ display: "flex" }} key={item}>
                    <Box
                      sx={{
                        width: "41px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item}교시
                    </Box>
                    <Box
                      sx={{
                        backgroundColor:
                          item % 2 === 1 ? "grey.50" : "grey.100",
                        display: "flex",
                        flex: "1 0 0",
                        justifyContent: "center",
                      }}
                    >
                      수학
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              typography: "subtitle1",
            }}
          >
            <Image src={PlateIcon} alt="plate" />
            오늘의 급식
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              overflowX: "scroll",
              scrollbarWidth: 0,
            }}
          >
            <Box
              sx={{
                p: "8px 12px",
                border: "1px solid",
                borderColor: ({ palette }) => palette.grey[400],
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                minWidth: "140px",
                typography: "caption",
              }}
            >
              <Chip
                size="small"
                sx={{ typography: "subtitle3" }}
                color="secondary"
                label="아침, 1234kcal"
              />
              <Box sx={{ minHeight: "100px", whiteSpace: "pre-wrap" }}>
                권세원볶음밥{"\n"}이희성무침{"\n"}상큼한돼지고기{"\n"}깍두기
                {"\n"}
                딸기모찌{"\n"}
                미소된장국{"\n"}황현민절임{"\n"}한예준튀김{"\n"}당근주스{"\n"}
                또뭐있냐
              </Box>
            </Box>
            <Box
              sx={{
                p: "8px 12px",
                border: "1px solid",
                borderColor: ({ palette }) => palette.grey[400],
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                minWidth: "140px",
                typography: "caption",
              }}
            >
              <Chip
                size="small"
                sx={{ typography: "subtitle3" }}
                color="secondary"
                label="아침, 1234kcal"
              />
              <Box sx={{ minHeight: "100px", whiteSpace: "pre-wrap" }}>
                권세원볶음밥{"\n"}이희성무침{"\n"}상큼한돼지고기{"\n"}깍두기
                {"\n"}
                딸기모찌{"\n"}
                미소된장국{"\n"}황현민절임{"\n"}한예준튀김{"\n"}당근주스{"\n"}
                또뭐있냐
              </Box>
            </Box>
            <Box
              sx={{
                p: "8px 12px",
                border: "1px solid",
                borderColor: ({ palette }) => palette.grey[400],
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                minWidth: "140px",
                typography: "caption",
              }}
            >
              <Chip
                size="small"
                sx={{ typography: "subtitle3" }}
                color="secondary"
                label="아침, 1234kcal"
              />
              <Box sx={{ minHeight: "100px", whiteSpace: "pre-wrap" }}>
                권세원볶음밥{"\n"}이희성무침{"\n"}상큼한돼지고기{"\n"}깍두기
                {"\n"}
                딸기모찌{"\n"}
                미소된장국{"\n"}황현민절임{"\n"}한예준튀김{"\n"}당근주스{"\n"}
                또뭐있냐
              </Box>
            </Box>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "-webkit-fill-available",
            paddingBlock: "12px",
            typography: "button",
          }}
        >
          9월 모평 등급 컷 바로 확인하기!
        </Button>
        <Box sx={{ display: "flex", gap: "16px", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              typography: "subtitle1",
            }}
          >
            <Image src={FireIcon} alt="fire" />
            이번주 인기글
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ".MuiChip-label": { padding: 0 },
            }}
          >
            {[1, 2, 3, 4].map((item) => {
              return (
                <Button
                  key={item}
                  sx={{ color: "unset", display: "block", textAlign: "start" }}
                >
                  <Box
                    sx={{
                      cursor: "pointer",
                      typography: "caption",
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <Chip
                      sx={{
                        width: "64px",
                        height: "auto",
                        bgcolor: "secondary.light",
                        color: "secondary.main",
                        typography: "caption",
                      }}
                      label="모의고사"
                    />
                    <Box sx={{ flex: "1 0 0" }}>
                      <Typography variant="subtitle2">
                        공부는 왜 해야하노
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        권세원
                        <Box sx={{ display: "flex", gap: "8px" }}>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "4px",
                              alignItems: "center",
                            }}
                          >
                            <ThumbUpRounded
                              sx={{ width: "16px", height: "16px" }}
                            />
                            83
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              gap: "4px",
                              alignItems: "center",
                            }}
                          >
                            <CommentRounded
                              sx={{ width: "16px", height: "16px" }}
                            />
                            83
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Button>
              );
            })}
          </Box>
        </Box>
      </Box>
      <NavigationBar />
    </Container>
  );
}
