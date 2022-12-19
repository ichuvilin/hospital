import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

const DoctorsItem = ({first_name, last_name, patronymic, photo, speciality}) => {
    return (
        <Card sx={{maxWidth: 275, minHeight: 500}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    image={process.env.REACT_APP_API_URL + photo}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {last_name} {first_name} {patronymic}
                    </Typography>
                    Специальность: {speciality}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default DoctorsItem;