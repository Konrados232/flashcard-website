import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './darkTheme';
import { Flashcard } from './flashcard';
import { CardContent, Typography } from '@mui/material';

interface Props {
    flashcard: Flashcard;
}

export default function FlashcardCard({ flashcard }: Props) {

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
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </React.Fragment>
        </ThemeProvider>
    );
}