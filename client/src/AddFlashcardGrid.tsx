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
import SendIcon from '@mui/icons-material/Send';
import { Flashcard } from './flashcard';

interface Props {
    flashcards: Flashcard[];
}

export default function AddFlashcardGrid({ flashcards }: Props) {
    
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
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <div>
                            <TextField
                                required
                                id="flashcard-title"
                                label="Title"
                                defaultValue=" "
                            />
                            <TextField
                                required
                                id="flashcard-content"
                                label="Content"
                                defaultValue=" "
                            />
                            <TextField
                                required
                                id="flashcard-description"
                                label="Description"
                                defaultValue=" "
                            />
                            {/* TO-DO add datepicker */}
                            <TextField
                                required
                                id="flashcard-date"
                                label="Date"
                                defaultValue=" "
                            />
                        </div>

                    </Box>

                    <Button variant="contained" endIcon={<SendIcon />}>
                        Add Flashcard
                    </Button>

                </Box>

            </Container>

        </ThemeProvider>
    );
}