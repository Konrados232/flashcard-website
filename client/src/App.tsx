import React, { useEffect, useState } from 'react';
import NavBar from './features/navBar/NavBar';
import MainGrid from './MainGrid';
import { v4 as uuidv4 } from 'uuid';


import SideMenu from './features/sideMenu/SideMenu';
import AboutGrid from './features/about/AboutGrid';
import AddFlashcardGrid from './features//add/AddFlashcardGrid';
import DeleteFlashcardGrid from './features/delete/DeleteFlashcardGrid';
import MotivationGrid from './features/motivation/MotivationGrid';
import ListFlashcardGrid from './features/list/ListFlashcardGrid';
import handler from './api/APIhandler';
import { Flashcard } from './api/flashcard';
import { darkTheme } from './features/themes/darkTheme';

function Grid2() {
    return (
        <div>
            Test2
        </div>
    );
}

function App() {

    const [shown, setShown] = useState(false);

    function toggleSideMenu(isShown: boolean) {
        return (event: React.KeyboardEvent | React.MouseEvent) => {
            if (event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
                return;
            }

            setShown(isShown);
        }
    }

    
    const [status, setStatus] = React.useState("About");


    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [submitStatus, setSubmitStatus] = useState(false);

    function handleFlashcardAdd(flashcard: Flashcard) {
        setSubmitStatus(true);

        // TO-DO temp date for now
        let newFlashcard = { ...flashcard, id: uuidv4(), date: "2022-06-04T19:23:42.362" };

        handler.Flashcards.post(newFlashcard).then(() => {
            setFlashcards([...flashcards, newFlashcard]);
            setSubmitStatus(false);
        })
    }

    function handleFlashcardEdit(flashcard: Flashcard) {
        setSubmitStatus(true);
        if (flashcard.id) {
            handler.Flashcards.put(flashcard).then(() => {
                setFlashcards([...flashcards.filter(x => x.id !== flashcard.id), flashcard]);
                setSubmitStatus(false);
            })
        }
    }

    function handleFlashcardDelete(flashcard: Flashcard) {
        setSubmitStatus(true);
        if (flashcard.id) {
            handler.Flashcards.delete(flashcard.id).then(() => {
                setFlashcards([...flashcards.filter(x => x.id !== flashcard.id)]);
                setSubmitStatus(false);
            })
        }
    }

    useEffect(() => {
        handler.Flashcards.list().then(response => {
            setFlashcards(response);
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
        <div className="App">
            <NavBar toggleSideMenu={toggleSideMenu} />
            <SideMenu
            shown={shown}
            toggleSideMenu={toggleSideMenu}
            setStatus={setStatus}/>
            
            <div>
                {changeGrid()}
            </div>

        </div>
    );
}


export default App;
