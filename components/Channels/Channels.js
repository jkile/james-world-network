import React from 'react';
import { Grid, Paper, Typography, Box, Avatar } from '@material-ui/core';
import styles from "./Channels.module.scss";

export default function Channels() {
    return (
        <div className={styles.main}>
            <Grid container direction="row" justify="center" align="center">
                <Grid item xs={12}>
                    <Box m={1}>
                        <Paper>
                            <Box display="flex" p={2}>
                                <Box mr={3}>
                                    <Avatar>

                                    </Avatar>
                                </Box>
                                <Typography variant="h4" component="h2">
                                    <Box fontWeight={700}>
                                        Fields of Plenty
                                </Box>
                                </Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
