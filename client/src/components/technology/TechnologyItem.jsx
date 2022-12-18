import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

const TechnologyItem = ({title, text, img}) => {

    return (<Card sx={{maxWidth: 345}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="270"
                image={img}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                {
                    text.map(i => (
                        <Typography key={`id__${i}`} variant="body2" color="text.secondary">
                            {i}
                        </Typography>
                    ))
                }
            </CardContent>
        </CardActionArea>
    </Card>);
};

export default TechnologyItem;