import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MedicationIcon from '@mui/icons-material/Medication';
import {useContext} from "react";
import {Context} from "../../index";
import {ADMIN_ROUTER, LOGIN_ROUTER, PROFILE_ROUTER, RECORD_ROUTER, REVIEW_ROUTER} from "../../utils/consts";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {

    const {user} = useContext(Context)

    const pages = [
        {
            name: 'Отзывы',
            path: REVIEW_ROUTER
        },
    ];
    const settings = [
        {
            name: 'Профиль',
            path: PROFILE_ROUTER
        },
        {
            name: 'Онлайн запись',
            path: RECORD_ROUTER
        }
    ];

    if (user.user.role === 'ADMIN') settings.push({"name": "Панель администратора", path: ADMIN_ROUTER})

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MedicationIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Безделушка
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map(({name, path}) => (
                            <Button
                                key={name}
                                href={path}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {name}
                            </Button>
                        ))}
                    </Box>
                    {
                        user.isAuth ?
                            <Box sx={{flexGrow: 0}}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt={user.user.first_name}
                                                src={process.env.REACT_APP_API_URL + user.user.photo}/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map(({name, path}) => (
                                        <MenuItem key={name} onClick={handleCloseUserMenu}>
                                            <Button
                                                key={name}
                                                href={path}
                                                onClick={handleCloseNavMenu}
                                            >
                                                {name}
                                            </Button>
                                        </MenuItem>
                                    ))
                                    }
                                </Menu>
                            </Box>
                            :
                            <Button href={LOGIN_ROUTER} sx={{my: 2, color: 'white', display: 'block'}}
                                    onClick={handleCloseNavMenu}>Войти</Button>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
})
export default NavBar;