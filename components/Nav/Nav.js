import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";


export default function Nav(props) {

    return (
        <AppBar position="sticky" color="inherit">
            <Toolbar>
                {!props.isNotMobile &&
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.toggle}>
                        <MenuIcon />
                    </IconButton>}
            </Toolbar>
        </AppBar>
    )
}
