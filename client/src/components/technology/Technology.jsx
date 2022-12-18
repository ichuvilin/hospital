import React from 'react';
import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import TechnologyItem from "./TechnologyItem";
import mrt from "../../assets/mrt.png"
import kt from "../../assets/kt.png"
import xray from "../../assets/rengen.png"
import uzi from "../../assets/uzi.png"

const Technology = () => {
    const tech = [
        {
            id: 1,
            title: "МРТ",
            text: ["1,5 тесла / до 200 кг", "3D/4D запись исследования", "МР маммография", "МРТ всего тела за 1,5 часа", "МРТ суставов"],
            image: mrt
        }, {
            id: 2,
            title: "КТ",
            text: ["128 срезов / до 227 кг", "3D/4D запись исследования", "Виртуальная колоноскопия", "МСКТ ангиография сердца", "МСКТ коронарного кальция"],
            image: kt
        }, {
            id: 3,
            title: "Рентген",
            text: ["3D робот-рентген Multitom Rax", "Трехмерное сканирование в онлайн-режиме", "Цифровая сшивка снимков позвоночника", "Урография", "Ирригоскопия"],
            image: xray
        }, {
            id: 4,
            title: "УЗИ",
            text: ["3D/4D режим", "Высокий уровень визуализации", "УЗИ глаза", "УЗИ при беременности по международным стандартам", "Эластография"],
            image: uzi
        }]
    return (
        <Container>
            <Typography component="h1" variant="h5" style={{margin: "50px 0"}}>
                Технологии
            </Typography>
            <Grid sx={{flexGrow: 1}} container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>
                        {tech.map(({id, title, text, image}) => (
                            <Grid key={id} item>
                                <TechnologyItem title={title} text={text} img={image}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Technology;