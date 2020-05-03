import React, { useState } from 'react';
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useMediaQuery } from 'react-responsive';
import Home from "../components/Home/Home";
import Axios from "axios";


function App({ stories }) {
  const [openSidebar, setSidebar] = useState(false);
  const isNotMobile = useMediaQuery({query: "(min-width: 1280px)"});

  const handleSidebarToggle = () => {
    setSidebar(!openSidebar);
  }

  return (
    <>
      <Nav toggle={handleSidebarToggle} isNotMobile={isNotMobile} />
      <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile} channels={stories.stories} />
      <Home isNotMobile={isNotMobile} />
      {openSidebar && <div className="overlay" onClick={handleSidebarToggle}></div>}
    </>

  );
}

export async function getStaticProps() {
  const date = new Date(0);
  const resAll = await Axios.get(`https://api.storyblok.com/v1/cdn/stories?cv=${date}version=published&token=${process.env.API_TOKEN}`);
  const stories = resAll.data

  return {
    props: {
      stories
    }
  }
}

export default App;
