import React from 'react';
import { InputBase, styled } from '@mui/material';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',

        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default StyledInputBase;
