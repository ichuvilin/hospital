import React, {useContext} from 'react';
import {Alert, Box, Container, CssBaseline, Grid, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {createRecord} from "../http/otherAPI";
import {useNavigate} from "react-router-dom";
import {PROFILE_ROUTER} from "../utils/consts";

const Record = observer(() => {

    const {doctors: {doctors}, user: {user}} = useContext(Context)

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const form = new FormData();
        form.append("date", data.get("recordDate"));
        form.append("cabinet", doctors.find(i => i.id == data.get("doctorName")).cabinet.room)
        form.append("user_id", user.id);
        form.append("doctor_id", data.get("doctorName"))
        await createRecord(form);
        navigate(PROFILE_ROUTER);
    };

    const now = new Date().toISOString().split("T")

    const templateDateNow = `${now[0]} ${now[1].substring(0, 5)}`;

    return (
        <Container>
            <Typography component="h1" variant="h5" style={{margin: "50px 0"}}>
                Онлайн запись
            </Typography>
            <CssBaseline/>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            select
                            autoComplete="given-name"
                            name="doctorName"
                            required
                            fullWidth
                            id="doctorName"
                            label="Выбиерите врача"
                            autoFocus
                        >
                            {doctors.map(({id, first_name, last_name, patronymic, speciality}) => (
                                <MenuItem key={id} value={id}>
                                    {first_name} {last_name} {patronymic} - {speciality}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="recordDate"
                            label="Дата приема"
                            type="datetime-local"
                            name="recordDate"
                            defaultValue={templateDateNow}
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
                    Записаться
                </Button>
            </Box>
        </Container>
    );
});

export default Record;