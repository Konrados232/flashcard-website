import React, { ChangeEvent } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';
import CssBaseline from '@mui/material/CssBaseline';
import { Flashcard } from '../../api/flashcard';
import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface Props {
    flashcards: Flashcard[];
    currentFlashcard: Flashcard;
    tempFlashcard: Flashcard;
    handleTempFlashcardChange: (flash: Flashcard) => void;
    handleEdit: () => void;
    handleCancel: () => void;
}

export default function FlashcardEditForm({ flashcards, currentFlashcard, tempFlashcard, handleTempFlashcardChange, handleEdit, handleCancel }: Props) {

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        if (value === undefined) {
            return;
        }

        let changedFlashcard = { ...tempFlashcard, [name]: value };

        handleTempFlashcardChange(changedFlashcard);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        alt="Add"
                        src={require("../../assets/pencil.png")}
                        sx={{ width: 70, height: 70 }}
                        variant="square"
                    />

                    <Typography component="h1" variant="h5">
                        Edit 
                        {currentFlashcard?.title}
                    </Typography>


                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="flashcard-title"
                            label="Title"
                            defaultValue=" "
                            name="title"
                            value={tempFlashcard?.title}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="flashcard-content"
                            label="Content"
                            defaultValue=" "
                            name="content"
                            value={tempFlashcard?.content}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="flashcard-description"
                            label="Description"
                            defaultValue=" "
                            name="description"
                            value={tempFlashcard?.description}
                            onChange={handleChange}
                        />

                    </Box>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Grid item>
                            <Button onClick={() => handleEdit()} variant="contained" endIcon={<SendIcon />}>
                                Edit Flashcard
                            </Button>
                        </Grid>
                        <Grid item>


                            <Button onClick={() => handleCancel()} variant="contained" sx={{ backgroundColor: "red" }}>
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </Container>

        </ThemeProvider>
    );
}