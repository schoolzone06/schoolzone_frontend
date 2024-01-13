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
import "./style.css";

const NavigationBar = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="메인" icon={<HomeRounded />} />
      <BottomNavigationAction label="급식" icon={<RestaurantMenuRounded />} />
      <BottomNavigationAction label="시간표" icon={<ScheduleRounded />} />
      <BottomNavigationAction label="커뮤니티" icon={<ThreePRounded />} />
      <BottomNavigationAction
        label="등급컷 확인"
        icon={<WorkspacePremiumRounded />}
      />
    </BottomNavigation>
  );
};

export default NavigationBar;
