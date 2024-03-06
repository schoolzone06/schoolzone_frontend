import font from "@/styles/font";
import theme from "@/styles/theme";
import { Typography } from "@mui/material";

interface TabElementProps {
  element: string;
  onClick: () => void;
  isSelected: boolean;
  component: JSX.Element;
}

const TabElement = ({ element, onClick, isSelected }: TabElementProps) => {
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

export default TabElement;
