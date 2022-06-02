import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './darkTheme';

export default function AddFlashcardGrid() {
    
    const [status, setStatus] = useState('motivated');

    // const [name, setName] = React.useState('Cat in the Hat');
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setName(event.target.value);
    // };

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="lg">
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
                        Add flashcard
                    </Typography>


                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-first"
                            label="First"
                            variant="filled"
                        />
                        <TextField
                            id="outlined-second"
                            label="Second"
                            variant="filled"
                        />
                    </Box>

                    <Button
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

        </ThemeProvider>
    );
}