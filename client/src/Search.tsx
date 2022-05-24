import React from 'react';
import { alpha, styled } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',

    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(0),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        width: "80%",
        marginRight: theme.spacing(5)
    },

    borderRadius: theme.shape.borderRadius,

    backgroundColor: alpha(theme.palette.common.white, 0.1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },

}));

export default Search;
