import { styled, createTheme } from "@mui/material/styles";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#ffff",
      dark: "#F4F4F4",
    },
    info: {
      main: "#CDCCCA",
      dark: "#000",
    },
  },
});

export const Item = styled("div")(({ theme }) => ({
  ...theme.typography.h6,
}));
