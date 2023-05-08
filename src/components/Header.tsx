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
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";

import { Logo, Boards } from "../UI/Icons";
import {
  theme,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  LogoWrapper,
} from "./themeHeader";

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ boxShadow: "none" }}>
          <Toolbar>
            <LogoWrapper onClick={() => console.log("logo click")}>
              <Logo />
            </LogoWrapper>
            <Divider
              sx={{ mx: 2, display: { xs: "none", sm: "block" } }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
            <Boards />
            <Typography
              className="header-link"
              sx={{ ml: 1, display: { xs: "none", md: "block" } }}
              variant="h6"
              component="h2"
              onClick={() => console.log("Boards click")}
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
                onClick={() => console.log("icon click")}
              >
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
              <IconButton
                color="inherit"
                size="large"
                onClick={() => console.log("icon click")}
              >
                <ErrorOutlineRoundedIcon />
              </IconButton>
              <IconButton
                color="inherit"
                size="large"
                sx={{ height: 48 }}
                onClick={() => console.log("icon click")}
              >
                <NotificationsNoneSharpIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                sx={{ height: 48, width: 48 }}
                onClick={() => console.log("avatar click")}
              >
                <Avatar alt="User" src="/images/1.jpg" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Divider sx={{ mt: 1 }} variant="middle" flexItem />
      </Box>
    </ThemeProvider>
  );
}
