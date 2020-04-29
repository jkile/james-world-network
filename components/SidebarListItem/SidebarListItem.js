import React from 'react';
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Avatar, Box } from '@material-ui/core';

export default function SidebarListItem(props) {
    return (
        <Link href="/[slug]" as={`/${props.id}`}>
            <ListItem button component="button" id={props.id}>
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText><Box>{props.text}</Box></ListItemText>
            </ListItem>
        </Link>
    )
}
