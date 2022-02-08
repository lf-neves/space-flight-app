import * as React from 'react';
import { useDispatch } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Toolbar, InputBase, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SortOption } from '@/components/core'
import { changeSearch } from '@/store/search'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
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

const StyledInputBase = styled(InputBase)(({ theme, onChange }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    onChange: onChange,
}));


export const Nav: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    return (
        <Grid data-test="NavBar" container style={{ justifyContent: 'center' }}>
            <AppBar position="static" sx={{ backgroundColor: '#302E53', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Toolbar sx={{ justifyContent: 'end', maxWidth: 'md', width: '100%' }}>
                    <Search data-test="SearchInput">
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ width: '300px' }}
                            onChange={(e) => dispatch(changeSearch(e.target.value))}
                        />
                    </Search>
                    <SortOption data-test='SelectInput' />
                </Toolbar>
            </AppBar>
        </Grid>
    );
}