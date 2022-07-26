import {useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { CategorieContext } from '../../context/CategorieContext';
import { types } from '../../types/ types';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

interface Props {
    title: string;
}

export const SearchAppBar: React.FC<Props> = ({ title }) => {

    const { categorieState, despachador }: any = useContext(CategorieContext);
    const [inputValue, setInputValue] = useState('');

    const OnChangeEvent = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
        despachador({
            type: types.digitandoCategorie,
            payload:event.target.value
        });
    }

    const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        despachador({
            type: types.cargarCategorie,
            payload:inputValue
        });

    }

    return (
        <AppBar position="static">
            <Toolbar>

                <Box sx={{ marginRight: 10 }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        {title}
                    </Typography>
                </Box>

                <Box sx={{ margin: 5 }}>
                    <form onSubmit={(event) => onSubmitForm(event)}>
                        <Search >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                style={{ width: 500 }}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={OnChangeEvent}
                                value={inputValue}
                            />
                        </Search>
                    </form>
                </Box>

            </Toolbar>
        </AppBar>

    );
}