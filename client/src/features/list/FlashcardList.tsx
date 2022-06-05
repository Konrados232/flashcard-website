import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';
import { Flashcard } from '../../api/flashcard';
import { Card } from '@mui/material';
import FlashcardCard from '../shared/FlashcardCard';

interface Props {
    flashcards: Flashcard[];
    handleCurrentFlashcard: (id: string) => void;
}

export default function FlashcardList({ flashcards, handleCurrentFlashcard }: Props) {

    return (
        <ThemeProvider theme={darkTheme}>

            {flashcards.map(flashcard => (
                <Card variant="outlined">
                    <FlashcardCard
                        flashcard={flashcard}
                        handleCurrentFlashcard={handleCurrentFlashcard}
                        showButtons={true} />
                </Card>
            ))}

        </ThemeProvider>
    );
}