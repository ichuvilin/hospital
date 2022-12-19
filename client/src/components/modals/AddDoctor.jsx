import React, {useContext, useEffect, useState} from 'react';
import {Grid, InputLabel, Modal, Select, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {createDoctor, fetchBranch} from "../../http/otherAPI";
import MenuItem from '@mui/material/MenuItem';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddDoctor = observer(({open, setOpen}) => {

    const {branch} = useContext(Context)

    const handleClose = () => setOpen(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData = new FormData();
        formData.append("first_name", data.get('firstName'));
        formData.append("last_name", data.get('lastName'));
        formData.append("patronymic", data.get('patronymic'));
        formData.append("speciality", data.get('speciality'));
        formData.append("cabinet", data.get('cabinet_number'));
        formData.append("branch_id", data.get('branch_id'));
        formData.append("photo", data.get("photo"));
        const response = await createDoctor(formData)
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Дабвить нового врача
                </Typography>
                <Box
                    sx={{
                        margin: "8px 0", display: 'flex', flexDirection: 'column', alignItems: 'center',
                    }}
                >
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
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
                                    fullWidth
                                    id="speciality"
                                    label="Speciality"
                                    name="speciality"
                                    autoComplete="speciality"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cabinet_number"
                                    label="№ Cabinet"
                                    name="cabinet_number"
                                    autoComplete="cabinet_number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    select
                                    fullWidth
                                    label="Назваие отделения"
                                    autoComplete="branch"
                                    name="branch_id"
                                    required
                                    id="branch_id"
                                >
                                    {branch.branch.map(({id, name}) => (
                                        <MenuItem key={id} value={id}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="photo"
                                    label="Photo"
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
                            Добавить
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
});

export default AddDoctor;