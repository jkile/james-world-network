import React from 'react';
import { Box, Paper, Typography, Card } from "@material-ui/core";

export default function About() {
    return (
        <Box m={1}>
            <Card elevation={3}>
                <Box p={2}>
                    <Typography variant="h4" component="h2">
                        <Box textAlign="left" fontWeight={700}>
                            ABOUT
                        </Box>
                    </Typography>
                    <Typography variant="p" component="p">
                        <Box textAlign="left">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Autem asperiores eligendi rem laboriosam quisquam eius quo earum itaque, 
                            quod saepe ex ducimus molestiae commodi cum rerum id odio quaerat aliquam sit sed incidunt reprehenderit quam illo. 
                            Quis iure provident quibusdam, rerum corrupti vel veritatis quas vero fuga error! 
                            Pariatur explicabo magnam culpa alias et suscipit ipsam! Eius alias porro amet possimus. 
                            Quisquam, natus architecto fuga impedit mollitia eos, adipisci at reprehenderit modi ab quo voluptatum dolores praesentium iste unde consequatur quod nesciunt laboriosam animi, 
                            quia blanditiis cum excepturi? Doloremque dignissimos expedita, blanditiis illo fugiat nesciunt recusandae officiis qui sed sit.
                        </Box>
                    </Typography>
                </Box>
            </Card>
        </Box>
    )
}
