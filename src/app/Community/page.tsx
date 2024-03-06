"use client";
import Header from "@/components/Header";
import font from "@/styles/font";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

interface Tab {
  element: string;
}

const TabElement = ({
  element,
  onClick,
  isSelected,
}: Tab & { onClick: () => void; isSelected: boolean }) => {
  return (
    <div
      style={{
        borderBottom: `2px solid ${isSelected ? theme.primary : "transparent"}`,
        padding: "12px 8px",
        cursor: "pointer",
        transition: "border-color 0.3s",
        boxSizing: "border-box",
      }}
      onClick={onClick}
    >
      <Typography sx={{ ...font.Subhead2, m: "0" }}>{element}</Typography>
    </div>
  );
};

const Community = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabElements = ["잡담", "취미", "학교분류", "모의고사/수능투기장"];

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <Box height="100vh">
      <Header title="부산소프트웨어마이스터고" />
      <Box
        display="flex"
        justifyContent="center"
        borderBottom={`1px solid ${theme.gray[300]}`}
      >
        {tabElements.map((e, i) => (
          <TabElement
            key={i}
            element={e}
            onClick={() => handleTabClick(i)}
            isSelected={selectedTab === i}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Community;
