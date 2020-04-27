import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Avatar, Box } from '@material-ui/core';

export default function SidebarListItem(props) {
    return (
        <ListItem button onClick={props.onClick} component="button" divider>
            <ListItemAvatar>
                <Avatar />
            </ListItemAvatar>
            <ListItemText><Box>{props.text}</Box></ListItemText>
        </ListItem>
    )
}
