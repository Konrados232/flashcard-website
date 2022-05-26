import React, { useState } from 'react';
import { Box, Drawer, List, Divider, ListItem, ListItemButton, IconButton, ThemeProvider } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { darkTheme } from './darkTheme';

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


    const firstStringList = ["About", "Test", "Add Flashcard", "Delete Flashcard"]
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
                        <ListItemButton>
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
                        <ListItemButton>
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
        </ThemeProvider>
    );
};
