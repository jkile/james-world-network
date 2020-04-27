import React from 'react';
import { Box, Paper, Typography } from "@material-ui/core";

export default function LiveFeed() {
    return (
        <Box m={1}>
            <Paper>
                <Box p={2}>
                    <Typography variant="h4" component="h2">
                        <Box textAlign="left" fontWeight={700}>Feed</Box>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}
