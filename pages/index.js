import React, { useState } from 'react';
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import darkTheme from "../styles/theme";
import Home from "../components/Home/Home";
import Axios from "axios";


function App({ stories }) {
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
        <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile} channels={stories.stories}/>
        <Home isNotMobile={isNotMobile}/>
      </Box>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const resAll = await Axios.get(`https://api.storyblok.com/v1/cdn/stories?version=published&token=${process.env.API_TOKEN}`);
  const stories = resAll.data

  return {
      props: {
          stories
      }
  }
}

export default App;
