import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';
import { Flashcard } from '../../api/flashcard';
import { Button, CardActions, CardContent, Typography } from '@mui/material';

interface Props {
    flashcard: Flashcard;
    handleCurrentFlashcard: (id: string) => void;
    showButtons: boolean;
}

export default function FlashcardCard({ flashcard, handleCurrentFlashcard, showButtons }: Props) {

    return (
        <ThemeProvider theme={darkTheme}>
            <React.Fragment>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {flashcard.title}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {flashcard.content}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {flashcard.description}
                    </Typography>
                    <Typography variant="body2" component="div">
                        {flashcard.date.toLocaleString()}
                    </Typography>
                </CardContent>
                <CardActions>
                    {showButtons ?<Button onClick={() => handleCurrentFlashcard(flashcard.id)} size="small">Edit</Button> : "" }
                </CardActions>
            </React.Fragment>
        </ThemeProvider>
    );
}