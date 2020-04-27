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
      }
    },
  });

export default darkTheme;