import React, { useState } from 'react';
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import darkTheme from "./theme";
import Home from "./pages/Home/Home";

import './App.scss';
import "./reset.scss"


function App() {
  const [openSidebar, setSidebar] = useState(false);
  const isNotMobile = useMediaQuery("(min-width: 1280px)");

  const handleSidebarToggle = () => {
    setSidebar(!openSidebar);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Nav toggle={handleSidebarToggle} isNotMobile={isNotMobile}/>
        <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile}/>
        <Home isNotMobile={isNotMobile}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
