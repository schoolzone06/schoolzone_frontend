import { Fab } from "@mui/material";
import {
  ModeRounded,
  CalendarMonthRounded,
  AddRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";

const icon = {
  write: <ModeRounded />,
  calendar: <CalendarMonthRounded />,
  add: <AddRounded />,
  arrowUp: <KeyboardArrowUpRounded />,
};

interface FloatingActionButtonPropsType
  extends React.HTMLAttributes<HTMLButtonElement> {
  type: keyof typeof icon;
}

const FloatingActionButton = ({ type }: FloatingActionButtonPropsType) => {
  return <Fab color="secondary">{icon[type]}</Fab>;
};

export default FloatingActionButton;
