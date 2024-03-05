"use client";

import Image from "next/image";
import HospitalIcon from "@/assets/HospitalIcon.svg";
import AppBar from "@/components/AppBar";
import BottomNavigation from "@/components/BottomNavigation";
import FloatingActionButton from "@/components/FloatingActionButton";
import {
  ArrowForwardIosRounded,
  CalendarMonthRounded,
  TimerOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  LinearProgress,
  Typography,
  styled,
} from "@mui/material";

const TimetablePage = () => {
  return (
    <Container sx={{ marginBlock: "72px", position: "relative" }}>
      <AppBar page="timetable" />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <Box
          sx={{
            p: "8px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "grey.100",
            borderRadius: "8px",
          }}
        >
          <Box sx={{ display: "flex", gap: "4px" }}>
            <TimerOutlined />
            <Chip
              size="small"
              sx={{ bgcolor: "secondary.light", color: "primary.main" }}
              label="40분 44초"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              typography: "subtitle2",
            }}
          >
            <Image src={HospitalIcon} alt="hospital" />
            권세원 병문안 하는 중!
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            color: "grey.900",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Chip
              clickable
              icon={<CalendarMonthRounded color="inherit" />}
              sx={{
                bgcolor: "grey.100",
                typography: "subtitle1",
                color: "inherit",
              }}
              label="2023년 9월"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              overflowY: "scroll",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 30].map((item) => (
              <StyledButton
                key={item}
                sx={{
                  ...(item === 1 && {
                    bgcolor: "secondary.main",
                    color: "common.white",
                    border: "none",
                    "&:hover": {
                      bgcolor: "#80ABFF",
                    },
                  }),
                }}
              >
                <Typography variant="caption">월</Typography>
                <Typography variant="subtitle1">{item}</Typography>
              </StyledButton>
            ))}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: "12px",
                  border: "1px solid",
                  borderColor: "grey.300",
                  borderRadius: "8px",
                  gap: "8px",
                  ...(item === 2 && {
                    bgcolor: "secondary.light",
                    color: "primary.main",
                  }),
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      flex: "1 0 0",
                    }}
                  >
                    <Image
                      src={HospitalIcon}
                      width="48"
                      height="48"
                      alt="Hospital"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography
                        sx={{ color: item === 2 ? "primary.main" : "grey.600" }}
                        variant="subtitle1"
                      >
                        권세원 병문안
                      </Typography>
                      <Typography
                        sx={{
                          color: item === 2 ? "secondary.main" : "grey.600",
                        }}
                        variant="caption"
                      >
                        오전 9시~오후 11시 • 구포성심병원
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton>
                    <ArrowForwardIosRounded />
                  </IconButton>
                </Box>
                {item === 2 && (
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress
                      variant="determinate"
                      value={50}
                      sx={{ borderRadius: 5 }}
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <FloatingActionButton type="add" />
      <BottomNavigation />
    </Container>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  flexDirection: "column",
  minWidth: "44px",
  height: "48px",
  color: theme.palette.grey[900],
  backgroundColor: theme.palette.common.white,
  border: "1px solid",
  borderColor: theme.palette.grey[300],
}));

export default TimetablePage;
