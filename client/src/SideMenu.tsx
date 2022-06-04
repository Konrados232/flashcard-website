import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Drawer, List, Divider, ListItem, ListItemButton, IconButton, ThemeProvider } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { darkTheme } from './darkTheme';
import MainGrid from './MainGrid';
import AboutGrid from './AboutGrid';
import AddFlashcardGrid from './AddFlashcardGrid';
import DeleteFlashcardGrid from './DeleteFlashcardGrid';
import MotivationGrid from './MotivationGrid';
import ListFlashcardGrid from './ListFlashcardGrid';
import { Flashcard } from './flashcard';
import { v4 as uuidv4 } from 'uuid';

function Grid2() {
    return (
        <div>
            Test2
        </div>
    );
}

export default function SideMenu() {

    const [shown, setShown] = useState(false);

    const toggleSideMenu = (isShown: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
                return;
            }

            setShown(isShown);
        };


    const firstStringList = ["About", "Test", "Add Flashcard", "Delete Flashcard", "List Flashcards"]
    const secondStringList = ["Motivation"]


    const [status, setStatus] = React.useState("About");


    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleSideMenu(false)}
            onKeyDown={toggleSideMenu(false)}
        >
            <List>
                {firstStringList.map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() =>
                            setStatus(text)
                        }>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {secondStringList.map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() =>
                            setStatus(text)
                        }>
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );



    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);

    function handleFlashcardAdd(flashcard: Flashcard) {
        if (flashcard.id) {
            setFlashcards([...flashcards, { ...flashcard, id: uuidv4() }]);
        }
    }

    function handleFlashcardEdit(flashcard: Flashcard) {
        if (flashcard.id) {
            setFlashcards([...flashcards.filter(x => x.id !== flashcard.id), flashcard]);
        }
    }

    function handleFlashcardDelete(flashcard: Flashcard) {
        if (flashcard.id) {
            setFlashcards([...flashcards.filter(x => x.id !== flashcard.id)]);
        }
    }

    useEffect(() => {
        axios.get<Flashcard[]>("http://localhost:5000/api/flashcards").then(response => {
            setFlashcards(response.data);
        })
    }, []);



    const changeGrid = () => {
        switch (status) {
            case "About": return <AboutGrid />;
            case "Test": return <Grid2 />;
            case "Add Flashcard": return <AddFlashcardGrid
                flashcards={flashcards}
                handleFlashcardAdd={handleFlashcardAdd} />;
            case "Delete Flashcard": return <DeleteFlashcardGrid
                flashcards={flashcards}
                handleFlashcardDelete={handleFlashcardDelete} />;

            case "List Flashcards": return <ListFlashcardGrid
                flashcards={flashcards}
                handleFlashcardsChange={handleFlashcardEdit}
            />;
            case "Motivation": return <MotivationGrid />;

            default: return <h1>No grid</h1>
        }
    }


    return (
        <ThemeProvider theme={darkTheme}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
                onClick={toggleSideMenu(true)}>

                <img src={require("./assets/a.png")}
                    width="100"
                    height="50" />

            </IconButton>


            <Drawer
                anchor="left"
                open={shown}
                onClose={toggleSideMenu(false)}
            >
                {list()}
            </Drawer>

            <div>
                {changeGrid()}
            </div>

        </ThemeProvider>

    );
};
