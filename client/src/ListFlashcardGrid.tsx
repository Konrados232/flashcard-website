import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './darkTheme';
import { Flashcard } from './flashcard';
import FlashcardList from './FlashcardList';
import FlashcardEditForm from './FlashcardEditForm';

interface Props {
    flashcards: Flashcard[];
    handleFlashcardsChange: (flashcard: Flashcard) => void;
}


export default function ListFlashcardGrid({ flashcards, handleFlashcardsChange }: Props) {

    const initFlashcard = {
        id: " ",
        title: " ",
        date: " ",
        description: " ",
        content: " "
    }

    const [tempFlashcard, setTempFlashcard] = useState<Flashcard>(initFlashcard);

    const [currentFlashcard, setCurrentFlashcard] = useState<Flashcard>(initFlashcard);

    function handleCurrentFlashcard(id: string) {
        let foundFlashcard = flashcards.find(x => x.id === id);
        if (foundFlashcard === undefined) {
            setCurrentFlashcard(initFlashcard);
            setTempFlashcard(initFlashcard);
        } else {
            setCurrentFlashcard(foundFlashcard);

            let copiedFlashcard = JSON.parse(JSON.stringify(foundFlashcard));

            setTempFlashcard(copiedFlashcard);
        }
    }

    function handleTempFlashcardChange(flashcard: Flashcard) {
        setTempFlashcard(flashcard);
    }

    function handleCancel() {
        setCurrentFlashcard(initFlashcard);
        setTempFlashcard(initFlashcard);
    }

    function handleEdit() {
        handleFlashcardsChange(tempFlashcard);
    }


    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={8}>
                                First for test
                            </Grid>

                            <FlashcardList
                                flashcards={flashcards}
                                handleCurrentFlashcard={handleCurrentFlashcard}
                            />

                        </Grid>

                    </Grid>
                    <Grid item xs>

                        <FlashcardEditForm
                            flashcards={flashcards}
                            currentFlashcard={currentFlashcard}
                            tempFlashcard={tempFlashcard}
                            handleTempFlashcardChange={handleTempFlashcardChange}
                            handleEdit={handleEdit}
                            handleCancel={handleCancel}
                        />

                    </Grid>
                    <Grid item xs>
                        Test
                    </Grid>
                </Grid>

            </Container>
        </ThemeProvider>
    );
}
