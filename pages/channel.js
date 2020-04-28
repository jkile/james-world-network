import React, { useState } from 'react';
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Channels from "../components/Channels/Channels";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import darkTheme from "../styles/theme";


function Channel() {
  const [openSidebar, setSidebar] = useState(false);
  const isNotMobile = useMediaQuery("(min-width: 1280px)");

  const handleSidebarToggle = () => {
    setSidebar(!openSidebar);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box >
        <Nav toggle={handleSidebarToggle} isNotMobile={isNotMobile}/>
        <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile}/>
        <Channels />
      </Box>
    </ThemeProvider>
  );
}

export default Channel;