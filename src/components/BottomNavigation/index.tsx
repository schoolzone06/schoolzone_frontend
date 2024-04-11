"use client";

import { useState } from "react";
import theme from "@/styles/theme";
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

  const handleNavigationValue = (
    event: React.SyntheticEvent,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        elevation: "3",
      }}
    >
      <Navigation showLabels value={value} onChange={handleNavigationValue}>
        <StyledBottomNavigationAction label="메인" icon={<HomeRounded />} />
        <StyledBottomNavigationAction
          label="급식"
          icon={<RestaurantMenuRounded />}
        />
        <StyledBottomNavigationAction
          label="시간표"
          icon={<ScheduleRounded />}
        />
        <StyledBottomNavigationAction
          label="커뮤니티"
          icon={<ThreePRounded />}
        />
        <StyledBottomNavigationAction
          label="등급컷 확인"
          icon={<WorkspacePremiumRounded />}
        />
      </Navigation>
    </Paper>
  );
};

const StyledBottomNavigationAction = styled(BottomNavigationAction)(`
  padding: 0 6px;
  &.Mui-selected {
    color: ${theme.gray[900]}
  }
`);

export default BottomNavigation;
