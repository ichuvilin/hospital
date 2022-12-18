import React from 'react';
import {Container, Grid, Paper, styled, Typography} from "@mui/material";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    textAlign: "justify",
    fontSize: 18
}));


const Facts = () => {
    return (
        <Container>
            <Typography component="h1" variant="h5" style={{margin: "50px 0"}}>
                О нас
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Item style={{minHeight: 102.94, lineHeight: "100px"}}>
                        Работаем с 2022
                    </Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>25 многопрофильных клиник для взрослых и детей</Item>
                </Grid>
                <Grid item xs={8}>
                    <Item> В медицинских центрах «Безделушка» работает более 2000
                        квалифицированных врачей различных специальностей, среди которых
                        197 кандидатов медицинских наук, 27 докторов медицинских наук,
                        317 профессоров, 2 академика РАМН, 9 доцентов и старших научных
                        сотрудников.
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item style={{minHeight: 67.47}}>Более 60 000 пациентов в год</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item style={{minHeight: 67.47}}>Более 5 000 операций в год</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item style={{minHeight: 67.47}}>Более 4 медицинских специальностей</Item>
                </Grid>
                <Grid item xs={3}>
                    <Item style={{minHeight: 67.47}}>2 круглосуточных стационаров</Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Facts;