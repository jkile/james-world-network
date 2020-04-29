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


function Channel({ stories }) {
    const [openSidebar, setSidebar] = useState(false);
    const isNotMobile = useMediaQuery("(min-width: 1280px)");

    const handleSidebarToggle = () => {
        setSidebar(!openSidebar);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box >
                <Nav toggle={handleSidebarToggle} isNotMobile={isNotMobile} />
                <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile} channels={stories.stories}/>
                <Channels  channel={stories.stories[0]}/>
            </Box>
        </ThemeProvider>
    );
}

export async function getStaticPaths(){

    const res = await Axios.get(`https://api.storyblok.com/v1/cdn/stories?version=published&token=${process.env.API_TOKEN}`);
    
    const paths = res.data.stories.map(item => ({
        params: { "slug" : item.slug }
    }))
    return { paths, fallback: false }
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


export default Channel;