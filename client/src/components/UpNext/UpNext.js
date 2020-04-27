import React, { useEffect } from 'react';
import { Box, Paper, Typography, Card } from "@material-ui/core";

export default function UpNext(props) {


    return (
        <Box m={1}>
            <Paper elevation={3}>
                <Box p={2} overflow="auto" maxHeight="38rem">
                    <Typography variant="h4">
                        <Box textAlign="left" m={1} fontWeight={700}>
                            UP NEXT
                        </Box>
                    </Typography>
                    <Box mt={2}>
                        <Card elevation={3}>
                            <Box p={1} display="flex" justifyContent="space-between">
                                <Typography variant="h6">
                                    <Box m={1} fontWeight="light">
                                        James World Tonight
                                    </Box>
                                </Typography>
                                <Typography variant="h6">
                                    <Box m={1} fontWeight="light" color="secondary.light">
                                        9:00 PM 
                                    </Box>
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box mt={2}>
                        <Card elevation={3}>
                            <Box p={1} display="flex" justifyContent="space-between">
                                <Typography variant="h6">
                                    <Box m={1} fontWeight="light">
                                        Ark After Dark
                                    </Box>
                                </Typography>
                                <Typography variant="h6">
                                    <Box m={1} fontWeight="light" color="secondary.light">
                                        10:00 PM
                                    </Box>
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box mt={2}>
                        <Card elevation={3}>
                            <Box p={1} display="flex" justifyContent="space-between">
                                <Typography variant="h6">
                                    <Box m={1} fontWeight="light">
                                        Goodnight Nate
                                    </Box>
                                </Typography>
                                <Typography variant="h6">
                                    <Box m={1} fontWeight="light" color="secondary.light">
                                        12:00 AM
                                    </Box>
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box mt={2}>
                        <Card elevation={3}>
                            <Box p={1} display="flex" justifyContent="space-between">
                                <Typography variant="h6">
                                    <Box m={1} fontWeight="light">
                                        James World Radio
                                    </Box>
                                </Typography>
                                <Typography variant="h6">
                                    <Box m={1} fontWeight="light" color="secondary.light">
                                        1:00 AM
                                    </Box>
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
