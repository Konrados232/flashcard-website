import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './darkTheme';
import { Flashcard } from './flashcard';
import { Card } from '@mui/material';
import FlashcardCard from './FlashcardCard';

interface Props {
    flashcards: Flashcard[];
}

export default function FlashcardList({ flashcards }: Props) {

    return (
        <ThemeProvider theme={darkTheme}>

            {flashcards.map(flashcard => (
                <Card variant="outlined">
                    <FlashcardCard flashcard={flashcard} />
                </Card>
            ))}

        </ThemeProvider>
    );
}