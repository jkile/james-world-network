import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import SidebarListItem from "../SidebarListItem/SidebarListItem";
import { Box, Typography, Divider, IconButton } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import HomeIcon from "@material-ui/icons/Home";


export default function Sidebar(props) {

    const handleItemClick = e => {
        console.log(e.target.id);
        props.toggle();
    }

    const drawer = (
        <div>
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" component="h2">
                    <Box pl={2} pt={1.5} pb={0} fontWeight={700}>
                        SHOWS
                </Box>
                </Typography>
                <Box mr={1} pt={1}>
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                </Box>
            </Box>
            <List>
                <Divider />
                <SidebarListItem onClick={handleItemClick} text="James World Tonight" />
                <SidebarListItem onClick={handleItemClick} text="Ark After Dark" />
                <SidebarListItem onClick={handleItemClick} text="Fields of Plenty" />
                <SidebarListItem onClick={handleItemClick} text="Goodnight Nate" />
            </List>
        </div>
    );

    return (
        <div>
            <Hidden lgUp>
                <Box>
                    <Drawer open={props.open} variant="temporary">
                        {drawer}
                    </Drawer>
                </Box>
            </Hidden>
            <Hidden mdDown>
                <Drawer open variant="permanent">
                    <Box width="18rem">
                        {drawer}
                    </Box>
                </Drawer>
            </Hidden>
        </div>
    )
}
