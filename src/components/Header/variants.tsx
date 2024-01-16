import {
  AccountCircleRounded,
  ArrowBackRounded,
  ArrowDropDownRounded,
  NotificationsRounded,
} from "@mui/icons-material";
import {
  Toolbar,
  Button,
  Typography,
  Badge,
  Box,
  IconButton,
} from "@mui/material";

const VariantOne = () => {
  return (
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Button color="inherit">
        <Typography variant="subtitle1">
          부산소프트웨어마이스터고등학교
        </Typography>
        <ArrowDropDownRounded />
      </Button>
      <Box>
        <IconButton color="inherit">
          <Badge badgeContent={99} color="secondary">
            <NotificationsRounded />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleRounded />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

const VariantTwo = ({ text }: { text: string }) => {
  return (
    <Toolbar>
      <IconButton color="inherit" sx={{ mr: "40px" }}>
        <ArrowBackRounded />
      </IconButton>
      <Typography variant="subtitle3">{text}</Typography>
      <Box>
        <IconButton color="inherit">
          <Badge badgeContent={99} color="secondary">
            <NotificationsRounded />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleRounded />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

const Variants = {
  main: <VariantOne />,
  "grade-cut": <VariantTwo text="등급컷 확인" />,
};

export default Variants;
