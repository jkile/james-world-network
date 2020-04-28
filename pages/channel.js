import React, { useState, useEffect } from 'react';
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Channels from "../components/Channels/Channels";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import darkTheme from "../styles/theme";
import Axios from 'axios';


function Channel(props) {
  const [openSidebar, setSidebar] = useState(false);
  const isNotMobile = useMediaQuery("(min-width: 1280px)");
    console.log(props.channelTags)
  const handleSidebarToggle = () => {
    setSidebar(!openSidebar);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box >
        <Nav toggle={handleSidebarToggle} isNotMobile={isNotMobile}/>
        <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile}/>
        <Channels channelInfo={props.channelInfo.story.content}/>
      </Box>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
    const resChannel = await Axios.get("https://api.storyblok.com/v1/cdn/stories/channel/fields-of-plenty?version=published&token=bVL46r1d97MgGoQEUPmQqQtt&cv=1588052047");
    const channelInfo = resChannel.data;
    const resAll = await Axios.get(`https://api.storyblok.com/v1/cdn/stories?token=${process.env.API_TOKEN}`);
    const channelTags = resAll.data
    
    return {
        props: {
            channelInfo,
            channelTags
        }
    }
}

export default Channel;