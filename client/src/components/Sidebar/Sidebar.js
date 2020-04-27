import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import SidebarListItem from "../SidebarListItem/SidebarListItem";
import { Box, Typography, Divider } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";


export default function Sidebar(props) {

    const handleItemClick = e => {
        console.log(e.target.id);
        props.toggle();
    }

    const drawer = (
        <div>
            <Typography variant="h3" component="h2">
                <Box ml={2} mt={1.75} mb={1} fontWeight={700} color="primary.light">
                    Shows
                </Box>
            </Typography>
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

                <Drawer open={props.open} variant="temporary">
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Drawer open variant="permanent">
                    {drawer}
                </Drawer>
            </Hidden>
        </div>
    )
}
