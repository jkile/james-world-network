import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import SidebarListItem from "../SidebarListItem/SidebarListItem";
import { Box, Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";


export default function Sidebar(props) {

    const handleItemClick = () => {
        props.toggle();
    }

    const drawer = (
        <div>
            <Typography variant="h4" component="h2">
                <Box ml={2} mt={2} mb={3} fontWeight={700} color="primary.light">
                    Shows
                        </Box>
            </Typography>
            <List>
                <SidebarListItem onClick={handleItemClick} text="James World Tonight" />
                <SidebarListItem onClick={handleItemClick} text="Ark After Dark" />
                <SidebarListItem onClick={handleItemClick} text="Fields of Plenty" />

            </List>
        </div>
    );

    return (
        <div>
            <Hidden mdUp>

                <Drawer open={props.open} variant="temporary">
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer open variant="permanent">
                    {drawer}
                </Drawer>
            </Hidden>
        </div>
    )
}
