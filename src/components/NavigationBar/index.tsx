"use client";

import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
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
        <BottomNavigationAction
          sx={{ p: "0 6px" }}
          label="메인"
          icon={<HomeRounded />}
        />
        <BottomNavigationAction
          sx={{ p: "0 6px" }}
          label="급식"
          icon={<RestaurantMenuRounded />}
        />
        <BottomNavigationAction
          sx={{ p: "0 6px" }}
          label="시간표"
          icon={<ScheduleRounded />}
        />
        <BottomNavigationAction
          sx={{ p: "0 6px" }}
          label="커뮤니티"
          icon={<ThreePRounded />}
        />
        <BottomNavigationAction
          sx={{ p: "0 6px" }}
          label="등급컷 확인"
          icon={<WorkspacePremiumRounded />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default NavigationBar;
