import React, { useState } from 'react';
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import { ThemeProvider } from "@material-ui/core/styles";
import { TwitchStream } from "react-twitch-stream";
import CssBaseline from "@material-ui/core/CssBaseline";
import darkTheme from "./theme"

import './App.scss';
import "./reset.scss"


function App() {
  const [openSidebar, setSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setSidebar(true);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Nav toggle={handleSidebarOpen}/>
        <Sidebar open={openSidebar} toggle={handleSidebarOpen}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
