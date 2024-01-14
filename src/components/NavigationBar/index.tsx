"use client";

import { useState } from "react";
import {
  styled,
  BottomNavigation,
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

const NavigationBar = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
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
      </BottomNavigation>
    </Paper>
  );
};

const StyledBottomNavigationAction = styled(BottomNavigationAction)(`
  padding: 0 6px;
`);

export default NavigationBar;
