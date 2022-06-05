import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './features/themes/darkTheme';
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { AppBar, BottomNavigation, Fab, Grid, makeStyles, Paper } from '@mui/material';

export default function MainGrid() {
    const [status, setStatus] = React.useState('motivated');

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        alt="A"
                        src={require("./assets/epic.png")}
                        sx={{ width: 70, height: 70 }}
                        variant="square"
                    />

                    <Typography component="h1" variant="h5">
                        Epicko ziomuś
                    </Typography>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Begin your journey
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Test yourself
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add new flashcard set
                    </Button>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Delete flashcard set
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary"
                        onClick={() =>
                            setStatus((current) =>
                                current === 'motivated' ? 'unmotivated' : 'motivated',
                            )
                        }
                    >
                        {status === 'motivated' ? 'LOSE MOTIVATION' : 'GAIN MOTIVATION'}
                    </Button>


                </Box>

            </Container>

         
            <BottomNavigation sx={{ position: 'fixed', left: 5, bottom: 5, width: 0.2, verticalAlign: "bottom" }}>
                <Grid
                alignItems={"center"}
                alignContent={"center"}>
                    <Grid item>
                        <Typography component="h4" variant="h5" align="center" sx={{ alignContent: "center", verticalAlign: "bottom" }} >
                            {status === 'motivated' ? 'MOTIVATED' : 'NOT ENOUGH'}
                        </Typography>
                    </Grid>
                </Grid>


            </BottomNavigation>

        </ThemeProvider>
    );
}