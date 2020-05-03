import React, { useState, useEffect } from 'react';
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Channels from "../components/Channels/Channels";
import { useMediaQuery } from 'react-responsive';
import Axios from 'axios';


function Channel(props) {
    const [openSidebar, setSidebar] = useState(false);
    const isNotMobile = useMediaQuery({query: "(min-width: 1280px)"});

    const handleSidebarToggle = () => {
        setSidebar(!openSidebar);
    }

    return (
        <div>
            <Nav toggle={handleSidebarToggle} isNotMobile={isNotMobile} />
            
            <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile} channels={props.stories.stories} />
            <Channels channel={props.story.story} />
            {openSidebar && <div className="overlay" onClick={handleSidebarToggle}></div>}
        </div>
    );
}

export async function getStaticPaths() {
    const date = new Date(0);
    const res = await Axios.get(`https://api.storyblok.com/v1/cdn/stories?cv=${date}version=published&token=${process.env.API_TOKEN}`);

    const paths = res.data.stories.map(item => ({
        params: { "slug": item.slug }
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

    const date = new Date(0);

    const resAll = await Axios.get(`https://api.storyblok.com/v1/cdn/stories?cv=${date}version=published&token=${process.env.API_TOKEN}`);
    const stories = resAll.data

    const resPage = await Axios.get(`https://api.storyblok.com/v1/cdn/stories/channel/${params.slug}?cv=${date}version=published&token=${process.env.API_TOKEN}`);
    const story = resPage.data
    return {
        props: {
            stories,
            story
        }
    }
}


export default Channel;