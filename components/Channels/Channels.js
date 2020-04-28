import React from 'react';
import { Grid, Paper, Typography, Box, Avatar } from '@material-ui/core';
import YouTube from "react-youtube-embed";
import styles from "./Channels.module.scss";
import LiveFeed from '../LiveFeed/LiveFeed';

export default function Channels() {
    return (
        <div className={styles.main}>
            <Grid container direction="row" justify="center" align="center">
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Box m={1}>
                        <Paper>
                            <Box display="flex" p={2}>
                                <Box mr={3}>
                                    <Avatar>

                                    </Avatar>
                                </Box>
                                <Typography variant="h4" component="h2">
                                    <Box fontWeight={700}>
                                        FIELDS OF PLENTY
                                    </Box>
                                </Typography>
                            </Box>
                            <Box p={2}>
                                <YouTube id="qLNeOVaMDvA" />
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Grid item xs={12}>
                        <Box m={1}>
                            <Paper>
                                <Box p={2}>
                                    <Typography variant="h4" component="h2">
                                        <Box fontWeight={700} textAlign="left">
                                            ABOUT
                                        </Box>
                                    </Typography>
                                    <Typography variant="p" component="p">
                                        <Box textAlign="left">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptatum, sint officia eos laudantium tenetur amet, quasi nisi temporibus maxime beatae perspiciatis vitae, sed pariatur a delectus nam ullam atque ducimus suscipit magnam velit incidunt iure. Corporis aut quaerat sint, iusto doloremque quam maxime optio nostrum atque possimus? Temporibus iste culpa voluptatibus officiis sapiente. Voluptatibus, repudiandae minima dolorum beatae commodi soluta pariatur omnis eos neque veritatis rerum suscipit labore illo blanditiis harum dicta quis inventore laborum a consectetur quaerat aut. Dicta eius, perspiciatis cumque necessitatibus eos officiis, placeat quaerat accusamus laborum error ducimus voluptas labore magnam ullam tempore libero! Maxime.
                                        </Box>  
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <LiveFeed />
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}
