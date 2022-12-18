import React from 'react';
import {Container} from "@mui/material";
import ModelView from "../components/model/ModelView";
import Facts from "../components/Facts";
import Technology from "../components/technology/Technology";
import DoctorsList from "../components/doctors/DoctorsList";

const Info = () => {
    return (
        <Container>
            <ModelView />
            <Facts />
            <Technology />
            <DoctorsList />
        </Container>
    );
};

export default Info;