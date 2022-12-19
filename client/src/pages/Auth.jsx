import React, {useContext} from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {CssBaseline, Grid, Link, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {INFO_ROUTER, LOGIN_ROUTER, REGISTRATION_ROUTER} from "../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer (() => {

    const {user} = useContext(Context)

    const navigate = useNavigate();

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTER;

    const handleSubmitLog = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const response = await login(
            data.get('email'),
            data.get('password'),
        )
        user.setUser(response);
        user.setIsAuth(true);
        navigate(INFO_ROUTER)
    };


    const handleSubmitReg = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData = new FormData();
        formData.append("first_name", data.get('firstName'));
        formData.append("last_name", data.get('lastName'));
        formData.append("patronymic", data.get('patronymic'));
        formData.append("email", data.get('email'));
        formData.append("password", data.get('password'));
        formData.append("date", data.get('birthday'));
        formData.append("registration", data.get('registration'));
        formData.append("photo", data.get("photo"));

        const response = await registration(formData)
        user.setUser(response);
        user.setIsAuth(true);
        navigate(INFO_ROUTER)
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            {isLogin ?
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmitLog} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href={REGISTRATION_ROUTER} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                :
                <Box
                    sx={{
                        margin: "8px 0 100px 0", display: 'flex', flexDirection: 'column', alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmitReg} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="patronymic"
                                    label="Patronymic"
                                    name="patronymic"
                                    autoComplete="patronymic"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="birthday"
                                    label="Birthday"
                                    type="date"
                                    name="birthday"
                                    defaultValue="2017-05-24"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="registration"
                                    label="Registration"
                                    type="registration"
                                    id="registration"
                                    autoComplete="registration"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="photo"
                                    label="Your Photo"
                                    type="file"
                                    name="photo"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href={LOGIN_ROUTER} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            }
        </Container>);
});

export default Auth;