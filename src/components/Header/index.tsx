import {
  AccountCircleRounded,
  ArrowDropDownRounded,
  NotificationsRounded,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  return (
    <Paper
      sx={{ flexGrow: 1, position: "fixed", top: 0, left: 0, right: 0 }}
      elevation={1}
    >
      <AppBar sx={{ bgcolor: ({ palette }) => palette.common.white }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            color: ({ palette }) => palette.grey[900],
          }}
        >
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
      </AppBar>
    </Paper>
  );
};

export default Header;
