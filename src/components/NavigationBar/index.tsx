"use client";

import { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
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
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{ position: "fixed", bottom: 0, width: "-webkit-fill-available" }}
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
  );
};

export default NavigationBar;
