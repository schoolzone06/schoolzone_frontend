"use client";

import { useState } from "react";
import {
  styled,
  BottomNavigation as Navigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import {
  HomeRounded,
  RestaurantMenuRounded,
  ScheduleRounded,
  ThreePRounded,
  WorkspacePremiumRounded,
} from "@mui/icons-material";

const BottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <Navigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <StyledBottomNavigationAction
          sx={{
            "&.Mui-selected": { color: ({ palette }) => palette.grey[900] },
          }}
          label="메인"
          icon={<HomeRounded />}
        />
        <StyledBottomNavigationAction
          sx={{
            "&.Mui-selected": { color: ({ palette }) => palette.grey[900] },
          }}
          label="급식"
          icon={<RestaurantMenuRounded />}
        />
        <StyledBottomNavigationAction
          sx={{
            "&.Mui-selected": { color: ({ palette }) => palette.grey[900] },
          }}
          label="시간표"
          icon={<ScheduleRounded />}
        />
        <StyledBottomNavigationAction
          sx={{
            "&.Mui-selected": { color: ({ palette }) => palette.grey[900] },
          }}
          label="커뮤니티"
          icon={<ThreePRounded />}
        />
        <StyledBottomNavigationAction
          sx={{
            "&.Mui-selected": { color: ({ palette }) => palette.grey[900] },
          }}
          label="등급컷 확인"
          icon={<WorkspacePremiumRounded />}
        />
      </Navigation>
    </Paper>
  );
};

const StyledBottomNavigationAction = styled(BottomNavigationAction)(`
  padding: 0 6px;
`);

export default BottomNavigation;
