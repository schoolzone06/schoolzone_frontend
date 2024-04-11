"use client";

import { useState } from "react";
import AppBar from "@/components/AppBar";
import { Box, Tab, Tabs } from "@mui/material";
import Posts from "@/components/Posts";

const CommunityPage = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box height="100vh">
      <AppBar page="community" />
      <Box
        sx={{
          mt: "56px",
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid",
          borderColor: "grey.400",
          width: "100%",
        }}
      >
        <Tabs value={value} onChange={handleTabChange} variant="scrollable">
          <Tab label="잡담" />
          <Tab label="취미" />
          <Tab label="학교분류" />
          <Tab label="모의고사/수능투기장" />
        </Tabs>
      </Box>
      <Posts />
    </Box>
  );
};

export default CommunityPage;
