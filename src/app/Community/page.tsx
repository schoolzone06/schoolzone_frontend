import React, { useState } from "react";
import Header from "@/components/Header";
import font from "@/styles/font";
import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import TabContent from "@/components/TabContent";

interface Tab {
  element: string;
}

const tabContents = [
  <TabContent key="tabContent" />,
  <TabContent key="tabContent" />,
  <TabContent key="tabContent" />,
  <TabContent key="tabContent" />,
];

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
  const TabElements = ["잡담", "취미", "학교분류", "모의고사/수능투기장"];

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <Box height="100vh">
      <Header title="부산소프트웨어마이스터고등학교" />
      <Box
        display="flex"
        justifyContent="center"
        borderBottom={`2px solid ${theme.gray[300]}`}
      >
        {TabElements.map((element, index) => (
          <TabElement
            key={index}
            element={element}
            onClick={() => handleTabClick(index)}
            isSelected={selectedTab === index}
          />
        ))}
      </Box>
      <Box width="100%" boxSizing="border-box">
        <Typography variant="h5" sx={{ ...font.Subhead2, m: "0" }}>
          {tabContents[selectedTab]}
        </Typography>
      </Box>
    </Box>
  );
};

export default Community;
