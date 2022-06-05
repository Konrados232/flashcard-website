import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';
import { lightTheme } from '../themes/lightTheme';
import { Flashcard } from '../../api/flashcard';
import FlashcardCard from '../shared/FlashcardCard';
import { Grid } from '@mui/material';
import FlashcardList from '../list/FlashcardList';

interface Props {
    flashcards: Flashcard[];
    handleFlashcardDelete: (flashcard: Flashcard) => void;
}


export default function DeleteFlashcardGrid({ flashcards, handleFlashcardDelete }: Props) {

    const initFlashcard = {
        id: " ",
        title: " ",
        date: " ",
        description: " ",
        content: " "
    }


    const [currentFlashcard, setCurrentFlashcard] = useState<Flashcard>(initFlashcard);

    function handleCancel() {
        setCurrentFlashcard(initFlashcard);
    }

    function handleDelete() {
        handleFlashcardDelete(currentFlashcard);
        setCurrentFlashcard(initFlashcard);
    }

    function handleCurrentFlashcard(id: string) {
        let foundFlashcard = flashcards.find(x => x.id === id);
        if (foundFlashcard === undefined) {
            setCurrentFlashcard(initFlashcard);
        } else {
            setCurrentFlashcard(foundFlashcard);
        }
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

                        <FlashcardCard
                            flashcard={currentFlashcard}
                            handleCurrentFlashcard={handleCurrentFlashcard}
                            showButtons={false}
                        />

                        <Button onClick={() => handleDelete()} variant="contained" sx={{ backgroundColor: "red" }}>
                            DELETE
                        </Button>


                        <Button onClick={() => handleCancel()} variant="contained" sx={{ backgroundColor: "red" }}>
                            Cancel
                        </Button>

                    </Grid>
                    <Grid item xs>
                        Test
                    </Grid>
                </Grid>

            </Container>
        </ThemeProvider>
    );
}
