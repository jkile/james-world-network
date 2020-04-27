import React from "react";
import { Box, Button, Paper, Typography, Grid } from "@material-ui/core";
import { TwitchStream } from "react-twitch-stream";
import UpNext from "../../components/UpNext/UpNext";
import About from "../../components/About/About";
import styles from "./Home.module.scss";
import logo from "../../assets/invertedlogo.png";
import LiveFeed from "../../components/LiveFeed/LiveFeed";


export default function Home(props) {
    return (
        <div className={styles.main}>
            <Grid container direction="row" justify="center" align="center">
            <Grid item xs={12}>
                    <img className={styles.headerLogo} src={logo} alt="James World Network Logo" />
                </Grid>
                <Grid container direction="row" justify="center" align="center" md={8} lg={8} xl={8}>
                    <Grid item xs={12}>
                        <Box m={1}>
                            <Paper elevation={3}>
                                <Box p={1}>
                                    <TwitchStream channelName="jamesworldnetwork" allowFullScreen autoplay muted />
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <About />
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <UpNext isNotMobile={props.isNotMobile} />
                    <LiveFeed />
                </Grid>
            </Grid>
        </div>
    )
}
