import { darken, lighten } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const beauBlue = "#BAD7F2";
const darkerBeauBlue = "#97B8D8";
const aquamarine = "##8FC0BC";
const magicMint = "#BAF2D8";
const celadon = "#BAF1BB";
const dutchWhite = "#F2E2BA";
const cameoPink = "#F2BAC9";
const contrastGray = "#555";

const theme = createTheme({
  palette: {
    primary: {
      main: beauBlue,
      contrastText: contrastGray,
      dark: darken(beauBlue, 0.1),
      light: lighten(beauBlue, 0.5),
    },
    secondary: {
      main: darkerBeauBlue,
      contrastText: contrastGray,
      dark: darken(darkerBeauBlue, 0.5),
      light: lighten(darkerBeauBlue, 0.4),
    },
    text: {
      primary: contrastGray,
      secondary: contrastGray,
      hint: contrastGray, // ?
      disabled: darken(darken(beauBlue, 0.9), 0.5),
    },
    common: {
      white: contrastGray,
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        "& .MuiFilledInput-root": {
          backgroundColor: lighten(beauBlue, 0.5),
        },
      },
    },
  },
});

export default theme;
