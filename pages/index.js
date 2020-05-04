import React, { useState } from 'react';
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useMediaQuery } from 'react-responsive';
import Home from "../components/Home/Home";
import {request, GraphQLClient }from 'graphql-request';


function App({ data }) {
  const [openSidebar, setSidebar] = useState(false);
  const isNotMobile = useMediaQuery({query: "(min-width: 1280px)"});
  const handleSidebarToggle = () => {
    setSidebar(!openSidebar);
  }

  return (
    <>
      <Nav toggle={handleSidebarToggle} isNotMobile={isNotMobile} />
      <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile} channels={data.ChannelItems.items} />
      <Home isNotMobile={isNotMobile} />
      {openSidebar && <div className="overlay" onClick={handleSidebarToggle}></div>}
    </>

  );
}

export async function getStaticProps() {

  const graphQLClient = new GraphQLClient(`https://gapi.storyblok.com/v1/api`, {
    headers: {
      token: process.env.API_TOKEN,
      version: "published"
    }
  })

  const query = `
  {
    ChannelItems {
      items{
        name
        slug
        content{
          avatar
        }
      }
    }
  }`;

  const data = await graphQLClient.request(query);
  return {
    props: {
      data
    }
  }
}

export default App;
