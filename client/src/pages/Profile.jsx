import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow
} from "@mui/material";
import {Context} from "../index";
import {getOne} from "../http/userAPI";
import {useNavigate} from "react-router-dom";
import {INFO_ROUTER} from "../utils/consts";
import {getAllRecordsForOneUser} from "../http/otherAPI";
import {observer} from "mobx-react-lite";
import {getConstNodeType} from "three/examples/jsm/nodes/shadernode/ShaderNode";

const Profile = observer(() => {
    const [spacing, setSpacing] = React.useState(2);

    const {user, doctors: {doctors}} = useContext(Context);

    const [getUser, setGetUser] = useState({})
    const [records, setRecords] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (getUser === undefined) {
            return (
                <Container>
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress/>
                    </Box>
                </Container>
            )
        }
        getOne(user.user.id).then(data => setGetUser(data))
        getAllRecordsForOneUser(user.user.id).then(data => setRecords(data));
    }, [])

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem("token")
        navigate(INFO_ROUTER)
    }


    return (
        <Container>
            <Typography component="h1" variant="h5" style={{margin: "50px 0"}}>
                Профиль
            </Typography>
            <Grid sx={{flexGrow: 1}} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        <Grid item xs={4}>
                            <Card sx={{maxWidth: 345}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={process.env.REACT_APP_API_URL + getUser.photo}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {getUser.last_name} {getUser.first_name} {getUser.patronymic}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Email: {getUser.email}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Прописка: {getUser.registration}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            День рождения: {getUser.date}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <Button onClick={() => logOut()}>Выйти</Button>
                            </Card>
                        </Grid>
                        <Grid item xs={8}>
                            <TableContainer component={Paper}>
                                <Table sx={{minWidth: 650}} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Имя врача</TableCell>
                                            <TableCell align="right">Кабинет</TableCell>
                                            <TableCell align="right">Время</TableCell>
                                            <TableCell align="right">Специальность</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {records.map(record => (
                                            <TableRow
                                                key={record.id}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {doctors.find(i => i.id == record.doctor_id).first_name}
                                                    {" "}
                                                    {doctors.find(i => i.id == record.doctor_id).last_name}
                                                    {" "}
                                                    {doctors.find(i => i.id == record.doctor_id).patronymic}
                                                </TableCell>
                                                <TableCell align="right">{record.cabinet}</TableCell>
                                                <TableCell
                                                    align="right">{record.date.split("T")[0]} {record.date.split("T")[1].substring(0, 5)}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align={"right"}>
                                                    {doctors.find(i => i.id == record.doctor_id).speciality}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    )
});

export default Profile;