import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './darkTheme';
import { Flashcard } from './flashcard';
import FlashcardList from './FlashcardList';

interface Props {
    flashcards: Flashcard[];
}

export default function ListFlashcardGrid({ flashcards }: Props) {

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >

                    <Grid item xs={8}>
                        First for test
                    </Grid>

                    <FlashcardList flashcards={flashcards} />

                </Grid>

            </Container>
        </ThemeProvider>
    );
}