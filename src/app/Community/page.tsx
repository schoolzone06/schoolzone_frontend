"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import Header from "@/components/Header";
import theme from "@/styles/theme";
import Posts from "@/components/Posts";
import Tab from "@/types/tabs.type";
import TabElement from "@/components/TabElement";

const Community = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabElements: Tab[] = [
    { element: "잡담", component: <Posts category="잡담" /> },
    { element: "취미", component: <Posts category="취미" /> },
    { element: "학교분류", component: <Posts category="학교분류" /> },
    {
      element: "모의고사/수능투기장",
      component: <Posts category="모의고사/수능투기장" />,
    },
  ];

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
        {tabElements.map((tab, index) => (
          <TabElement
            key={index}
            element={tab.element}
            onClick={() => handleTabClick(index)}
            isSelected={selectedTab === index}
            component={<></>}
          />
        ))}
      </Box>
      <Box width="100%">{tabElements[selectedTab].component}</Box>
    </Box>
  );
};

export default Community;
