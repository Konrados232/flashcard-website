import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';
import { lightTheme } from '../themes/lightTheme';
import { Flashcard } from '../../api/flashcard';
import FlashcardCard from '../shared/FlashcardCard';
import { Avatar, Box, Grid } from '@mui/material';
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

    const [isSelected, setIsSelected] = useState<boolean>(false);


    function handleCancel() {
        setCurrentFlashcard(initFlashcard);
        setIsSelected(false);
    }

    function handleDelete() {
        handleFlashcardDelete(currentFlashcard);
        setCurrentFlashcard(initFlashcard);
        setIsSelected(false);
    }

    function handleCurrentFlashcard(id: string) {
        let foundFlashcard = flashcards.find(x => x.id === id);
        if (foundFlashcard === undefined) {
            setCurrentFlashcard(initFlashcard);
        } else {
            setCurrentFlashcard(foundFlashcard);
        }
        setIsSelected(true);
    }

    function flashcardNotSelectedForm() {
        return (
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
                    src={require("../../assets/trash-can.png")}
                    sx={{ width: 70, height: 70 }}
                    variant="square"
                />
                <br></br>
                Select Flashcard To Delete

            </Box >
        )
    }

    function flashcardDeleteForm() {
        return (
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <FlashcardCard
                    flashcard={currentFlashcard}
                    handleCurrentFlashcard={handleCurrentFlashcard}
                    showButtons={false}
                />
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Grid item>
                        <Button onClick={() => handleDelete()} size="large" variant="contained" sx={{ backgroundColor: "red" }}>
                            DELETE
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => handleCancel()} size="large" variant="contained" sx={{ backgroundColor: "red" }}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>

            </Box>
        );
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
                        {isSelected ? flashcardDeleteForm() : flashcardNotSelectedForm()}
                    </Grid>
                </Grid>

            </Container>
        </ThemeProvider>
    );
}
