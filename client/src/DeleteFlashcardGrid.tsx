import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { alpha, createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './darkTheme';
import { DataGrid, GridRowsProp, GridColDef, gridClasses } from '@mui/x-data-grid';
import { green, orange } from '@mui/material/colors';
import { useDemoData } from '@mui/x-data-grid-generator';
import { lightTheme } from './lightTheme';



export default function DeleteFlashcardGrid() {


    const ODD_OPACITY = 0.2;

    const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
        [`& .${gridClasses.row}.even`]: {
            backgroundColor: theme.palette.secondary.main,
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(theme.palette.background.default, ODD_OPACITY),
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
            },
            '&.Mui-selected': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY + theme.palette.action.selectedOpacity,
                ),
                '&:hover, &.Mui-hovered': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY +
                        theme.palette.action.selectedOpacity +
                        theme.palette.action.hoverOpacity,
                    ),
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                        backgroundColor: alpha(
                            theme.palette.primary.main,
                            ODD_OPACITY + theme.palette.action.selectedOpacity,
                        ),
                    },
                },
            },
        },
    }));


    const [status, setStatus] = useState('motivated');

    // const [name, setName] = React.useState('Cat in the Hat');
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setName(event.target.value);
    // };

    const rows: GridRowsProp = [
        { id: 1, col1: "Hello", col2: "World" },
        { id: 2, col1: "DataGridPro", col2: "is Awesome" },
        { id: 3, col1: "MUI", col2: "is Amazing" },
        { id: 3, col1: "Witam", col2: "najs" },
        { id: 3, col1: "Witam2", col2: "najs2" },
        { id: 3, col1: "Witam3", col2: "najs3" },
    ];

    const columns: GridColDef[] = [
        { field: "col1", headerName: "First flashcard", width: 150 },
        { field: "col2", headerName: "Second flashcard", width: 150 },
        { field: "col3", headerName: "Second flashcard", width: 150 },
        { field: "col4", headerName: "Second flashcard", width: 150 },
    ];

    const { data, loading } = useDemoData({
        dataSet: 'Employee',
        rowLength: 200,
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        alt="A"
                        src={require("./assets/epic.png")}
                        sx={{ width: 70, height: 70 }}
                        variant="square"
                    />

                    <Typography component="h1" variant="h5">
                        Delete flashcard
                    </Typography>


                    <ThemeProvider theme={darkTheme}>
                        <div style={{ height: 300, width: "100%" }}>
                            <StripedDataGrid
                                loading={loading}
                                {...data}
                                getRowClassName={(params) =>
                                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                                }
                            />
                            {/* <DataGrid rows={rows} columns={columns} /> */}
                        </div>
                    </ThemeProvider>


                    <Button
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary"
                        onClick={() =>
                            setStatus((current) =>
                                current === 'motivated' ? 'unmotivated' : 'motivated',
                            )
                        }
                    >
                        {status === 'motivated' ? 'LOSE MOTIVATION' : 'GAIN MOTIVATION'}
                    </Button>


                </Box>

            </Container>

        </ThemeProvider>
    );
}