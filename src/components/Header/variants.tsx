import {
  AccountCircleRounded,
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

const VariantTwo = () => {
  return <div></div>;
};

const Variants = {
  main: <VariantOne />,
  "grade-cut": <VariantTwo />,
};

export default Variants;
