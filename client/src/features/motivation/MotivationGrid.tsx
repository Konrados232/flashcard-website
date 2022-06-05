import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '../themes/darkTheme';

function MotivatedImage() {
    return (
        <div>
            <Avatar
                alt="Motivated"
                src={require("../../assets/MotivatedVergil.jpg")}
                sx={{ width: "50%", height: "50%", margin: "auto" }}
                variant="square"
            />
        </div>
    );
}

function UnmotivatedImage() {
    return (
        <div>
            <Avatar
                alt="Unmotivated"
                src={require("../../assets/UnmotivatedVergil.jpg")}
                sx={{ width: "50%", height: "50%", margin: "auto" }}
                variant="square"
            />
        </div>
    );
}


export default function MotivationGrid() {

    const [status, setStatus] = React.useState("motivated");

    const changeImage = () => {
        switch (status) {
            case "motivated": return <MotivatedImage />;
            case "unmotivated": return <UnmotivatedImage />;

            default: return <h1>No image</h1>
        }
    }


    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="md">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >


                    <Typography component="h1" variant="h3">
                        Vergil Motivation Training
                    </Typography>


                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary"
                        onClick={() =>
                            setStatus((current) =>
                                current === "motivated" ? "unmotivated" : "motivated",
                            )
                        }
                    >
                        {status === "motivated" ? "LOSE MOTIVATION" : "GAIN MOTIVATION"}
                    </Button>


                </Box>
            </Container>

            <Container component="sub" maxWidth="lg">
                    <CssBaseline />

                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {
                            changeImage()
                        }

                    </Box>

                </Container>

        </ThemeProvider>
    );
}