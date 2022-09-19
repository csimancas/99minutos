import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { esES } from "@mui/x-data-grid";
// Create a theme instance.
const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#556cd6",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: red.A400,
      },
    },
  },
  esES
);

export default theme;
