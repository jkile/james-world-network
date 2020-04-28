import React, { useEffect } from 'react';
import { Grid, Paper, Typography, Box, Avatar } from '@material-ui/core';
import YouTube from "react-youtube-embed";
import styles from "./Channels.module.scss";
import LiveFeed from '../LiveFeed/LiveFeed';
import Axios from 'axios';

export default function Channels(props) {

    useEffect(() => {
        //console.log(props)
    }, [])

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
                                        
                                    </Box>
                                </Typography>
                            </Box>
                            <Box p={2}>
                                <YouTube id="" />
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

