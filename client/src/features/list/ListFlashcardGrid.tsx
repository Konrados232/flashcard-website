import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';
import { Flashcard } from '../../api/flashcard';
import FlashcardList from './FlashcardList';
import FlashcardEditForm from '../edit/FlashcardEditForm';
import { Box } from '@mui/material';

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
        setCurrentFlashcard(tempFlashcard);
    }


    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="lg" sx={{ marginTop: 5 }}>
                <CssBaseline />
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="stretch"
                        >


                            <Box
                                style={{ maxHeight: "75vh", maxWidth: "120vh", overflow: "scroll" }}>

                                <FlashcardList
                                    flashcards={flashcards}
                                    handleCurrentFlashcard={handleCurrentFlashcard}
                                />
                            </Box>

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
                </Grid>

            </Container>
        </ThemeProvider>
    );
}
