import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddDoctor from "../components/modals/AddDoctor";
import AddCabinet from "../components/modals/AddCabinet";
import AddBranch from "../components/modals/AddBranch";

const Admin = () => {

    const [createDoctor, setCreateDoctor] = useState(false);
    const [createCabinet, setCreateCabinet] = useState(false);
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
                    onClick={() => setCreateCabinet(true)}
            >
                Добавить кабинет
            </Button>
            <Button variant="contained"
                    style={{width: '100%', height: "50px", margin: "20px 0"}}
                    onClick={() => setCreateWard(true)}
            >
                Добавить отделение
            </Button>
            <AddDoctor open={createDoctor} setOpen={setCreateDoctor}/>
            <AddCabinet open={createCabinet} setOpen={setCreateCabinet}/>
            <AddBranch  open={createWard} setOpen={setCreateWard}/>
        </Container>
    );
};

export default Admin;