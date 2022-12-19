import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddDoctor from "../components/modals/AddDoctor";
import AddBranch from "../components/modals/AddBranch";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {

    const [createDoctor, setCreateDoctor] = useState(false);
    const [createWard, setCreateWard] = useState(false);


    return (
        <Container>
            <Typography component="h1" variant="h5" style={{margin: "50px 0"}}>
                Панель администратора
            </Typography>
            <Button variant="contained"
                    style={{width: '100%', height: "50px", margin: "20px 0"}}
                    onClick={() => setCreateDoctor(true)}
            >
                Зарегистрировать нового врача
            </Button>
            <Button variant="contained"
                    style={{width: '100%', height: "50px", margin: "20px 0"}}
                    onClick={() => setCreateWard(true)}
            >
                Добавить отделение
            </Button>
            <AddDoctor open={createDoctor} setOpen={setCreateDoctor}/>
            <AddBranch  open={createWard} setOpen={setCreateWard}/>
        </Container>
    );
});

export default Admin;