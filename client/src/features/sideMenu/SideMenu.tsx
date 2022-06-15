import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemButton, IconButton, ThemeProvider } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { darkTheme } from '../themes/darkTheme';

interface Props {
    shown: boolean;
    toggleSideMenu: any;
    setStatus: Dispatch<SetStateAction<string>>;
}

export default function SideMenu({ shown, toggleSideMenu, setStatus}: Props) {

    const firstStringList = ["About", "Test", "Add Flashcard", "Delete Flashcard", "List Flashcards"]
    const secondStringList = ["Motivation"]


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

    return (
        <ThemeProvider theme={darkTheme}>
            <Drawer
                anchor="left"
                open={shown}
                onClose={toggleSideMenu(false)}
            >
                {list()}
            </Drawer>
        </ThemeProvider>
    );
};
