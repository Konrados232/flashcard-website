import React, { ChangeEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';
import SendIcon from '@mui/icons-material/Send';
import { Flashcard } from '../../api/flashcard';

interface Props {
    flashcards: Flashcard[];
    handleFlashcardAdd: (flashcard: Flashcard) => void;
}

export default function AddFlashcardGrid({ flashcards, handleFlashcardAdd }: Props) {

    const initFlashcard = {
        id: " ",
        title: " ",
        date: " ",
        description: " ",
        content: " "
    }

    const [tempFlashcard, setTempFlashcard] = useState<Flashcard>(initFlashcard);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        if (value === undefined) {
            return;
        }

        let changedFlashcard = { ...tempFlashcard, [name]: value };

        setTempFlashcard(changedFlashcard);
    }

    function resetTempFlashcard() {
        setTempFlashcard(initFlashcard);
    }


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
                        src={require("../../assets/epic.png")}
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
                            {/* TO-DO add datepicker
                            <TextField
                                required
                                id="flashcard-date"
                                label="Date"
                                defaultValue=" "
                                name="date"
                                value={tempFlashcard?.date}
                                onChange={handleChange}
                            /> */}
                        </div>

                    </Box>

                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={() => handleFlashcardAdd(tempFlashcard)}>
                        Add Flashcard
                    </Button>
                        <br></br>
                    <Button
                        variant="contained"
                        onClick={() => resetTempFlashcard()}>
                        Reset
                    </Button>

                </Box>

            </Container>

        </ThemeProvider>
    );
}