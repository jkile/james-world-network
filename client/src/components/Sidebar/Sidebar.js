import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Divider, Typography, Box } from '@material-ui/core';

export default function Sidebar(props) {
    return (
        <Drawer open={props.open}>
            <Box m={2}>
                <Typography variant="h4">Shows</Typography>
            </Box>
            <Divider/>
            <List>
                <ListItem>
                    <ListItemAvatar />
                    <span><ListItemText>Ark After Dark</ListItemText></span>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemAvatar />
                    <span><ListItemText>Fields of Plenty</ListItemText></span>
                </ListItem>
            </List>

        </Drawer>
    )
}
