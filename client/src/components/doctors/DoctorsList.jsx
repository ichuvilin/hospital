import React, {useContext} from 'react';
import {Container, Grid} from "@mui/material";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Typography from "@mui/material/Typography";
import TechnologyItem from "../technology/TechnologyItem";
import DoctorsItem from "./DoctorsItem";

const DoctorsList = observer(() => {

    const {doctors} = useContext(Context)

    const docList = list => {
        let arr = []
        for (let i = 0; i < 3; i++) {
            arr[i] = list[i];
        }
        return arr
    }

    const renderDoc = docList(doctors.doctors);

    return (
        <Container>
            <Typography component="h1" variant="h5" style={{margin: "50px 0"}}>
                Наш персонал
            </Typography>
            <Grid sx={{flexGrow: 1}} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {renderDoc[0] === undefined ||
                        renderDoc[1] === undefined ||
                        renderDoc[2] === undefined ? doctors.doctors.map(({
                                                                                              id,
                                                                                              first_name,
                                                                                              last_name,
                                                                                              patronymic,
                                                                                              photo,
                                                                                              speciality
                                                                                          }) => (
                                <Grid key={id} item>
                                    <DoctorsItem key={id}
                                                 first_name={first_name}
                                                 last_name={last_name}
                                                 photo={photo}
                                                 patronymic={patronymic}
                                                 speciality={speciality}
                                    />
                                </Grid>
                            )) :
                            docList(doctors.doctors).map(({
                                                              id,
                                                              first_name,
                                                              last_name,
                                                              patronymic,
                                                              photo,
                                                              speciality
                                                          }) => (
                                <Grid key={id} item>
                                    <DoctorsItem key={id}
                                                 first_name={first_name}
                                                 last_name={last_name}
                                                 photo={photo}
                                                 patronymic={patronymic}
                                                 speciality={speciality}
                                    />
                                </Grid>))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
});

export default DoctorsList;