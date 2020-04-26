import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import SidebarListItem from "../SidebarListItem/SidebarListItem";
import { Box, Typography, Divider } from "@material-ui/core";


export default function Sidebar(props) {


    const handleItemClick = () => {
        props.toggle();
    }
    return (
        <Drawer open={props.open}>
            <Box m={1}>
                <Typography variant="h4">Shows</Typography>
            </Box>
            <Divider />
            <List>
                <SidebarListItem onClick={handleItemClick} text="James World Tonight"/>
                <SidebarListItem text="Ark After Dark"/>
                <SidebarListItem text="Fields of Plenty"/>
   
            </List>

        </Drawer>
    )
}
