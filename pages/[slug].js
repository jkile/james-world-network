import React, { useState, useEffect } from 'react';
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";
import Channels from "../components/Channels/Channels";
import { useMediaQuery } from 'react-responsive';
import Axios from 'axios';
import { request, GraphQLClient } from 'graphql-request';


function Channel(props) {
    const [openSidebar, setSidebar] = useState(false);
    const isNotMobile = useMediaQuery({ query: "(min-width: 1280px)" });

    const handleSidebarToggle = () => {
        setSidebar(!openSidebar);
    }

    return (
        <div>
            <Nav toggle={handleSidebarToggle} isNotMobile={isNotMobile} />

            <Sidebar open={openSidebar} toggle={handleSidebarToggle} isNotMobile={isNotMobile} channels={props.data.ChannelItems.items} />
            <Channels channel={props.data.ChannelItem.content} />
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

    const graphQLClient = new GraphQLClient(`https://gapi.storyblok.com/v1/api`, {
        headers: {
            token: process.env.API_TOKEN,
            version: "published"
        }
    })
    const variables = {
        slug: "channel/"+ params.slug
    }
    const query = `
      query getChannel($slug: ID!) {
        ChannelItems {
          items{
            name
            slug
            content{
              avatar
            }
          }
        }
        ChannelItem(id: $slug){
            content{
                title
                about
                video_url
                avatar
                instagram
                twitter
                facebook
            }
        }
      }`;
    const data = await graphQLClient.request(query, variables);
    // console.log(JSON.stringify(data, undefined, 2))

    return {
        props: {
            data
        }
    }
}


export default Channel;