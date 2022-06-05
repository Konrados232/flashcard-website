import React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { darkTheme } from '../themes/darkTheme';
import { ThemeProvider } from '@mui/material';


export default function AboutGrid() {
    return (
        <div style = {{ backgroundImage: `url(require("assets/epic.png"))` }}>
            <ThemeProvider theme={darkTheme}>
                <Container component="main" maxWidth="sm">
                    <CssBaseline />

                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h2">
                            Flashcard Project
                        </Typography>

                        <Avatar
                            alt="A"
                            src={require("../../assets/epic.png")}
                            sx={{ width: 250, height: 250 }}
                            variant="square"
                        />
                    </Box>

                </Container>

            </ThemeProvider>
        </div>
    );
}