import {
  AppBar,
  Box,
  Toolbar,
  Divider,
  IconButton,
  Typography,
  Avatar,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  Search as SearchIcon,
  AddCircleOutlineOutlined,
  NotificationsNoneSharp,
  ErrorOutlineRounded,
} from "@mui/icons-material";

import {
  theme,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  LogoWrapper,
} from "./ThemeHeader";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ boxShadow: "none" }}>
          <Toolbar>
            <LogoWrapper>
              <img src="/images/icons/logo.svg" alt="logo" />
            </LogoWrapper>
            <Divider
              sx={{ mx: 2, display: { xs: "none", sm: "block" } }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <img src="/images/icons/boards.svg" alt="boards" />
            <Typography
              className="header-link"
              sx={{ ml: 1, display: { xs: "none", md: "block" } }}
              variant="h6"
              component="h2"
            >
              Boards
            </Typography>
            <Divider
              sx={{ mx: 2, display: { xs: "none", sm: "block" } }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase inputProps={{ "aria-label": "search" }} />
            </Search>
            <Box
              sx={{
                flexGrow: 10,
                display: { xs: "block", sm: "none" },
                color: "secondary.dark",
                ml: 2,
              }}
            >
              <SearchIcon />
            </Box>
            <Box sx={{ flexGrow: 15 }} />
            <Box
              sx={{
                display: "flex",
                color: "secondary.dark",
                flexGrow: 1,
                justifyContent: "space-around",
              }}
            >
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                sx={{ height: 48 }}
              >
                <AddCircleOutlineOutlined />
              </IconButton>
              <IconButton color="inherit" size="large">
                <ErrorOutlineRounded />
              </IconButton>
              <IconButton color="inherit" size="large" sx={{ height: 48 }}>
                <NotificationsNoneSharp />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                sx={{ height: 48, width: 48 }}
              >
                <Avatar alt="User" src="/images/avatar.jpg" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Divider sx={{ mt: 1 }} variant="middle" flexItem />
      </Box>
    </ThemeProvider>
  );
}
