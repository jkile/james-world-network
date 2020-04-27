import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: "#5182c2",
        dark: "#33447d",
        light: "#c1dbf1"
      },
      secondary: {
        main: "#c25182",
        dark: "#803358",
        light: "#d891b4"
      },
      background: {
        default: "#011627",
        paper: "#022f55"
      },
      text: {
        primary: "#F6F7F8"
      }
    },
    typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
  });

export default darkTheme;