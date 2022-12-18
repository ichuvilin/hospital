import React from 'react';
import {createBranch, createCabinet} from "../../http/otherAPI";
import {Grid, Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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

const AddBranch = ({open, setOpen}) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const formData = new FormData();
        formData.append("name", data.get('name'));
        const response = await createBranch(formData)
        console.log(response)
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Регистрация нового отделения
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
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Название"
                                    autoFocus
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Зарегистрировать новое отделения
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default AddBranch;