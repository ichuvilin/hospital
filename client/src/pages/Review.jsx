import React, {useContext} from 'react';
import {Card, CardContent, Container, Slider, TextField} from "@mui/material";
import {Context} from "../index";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {observer} from "mobx-react-lite";
import {createReview} from "../http/otherAPI";
import Typography from "@mui/material/Typography";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Review = observer(() => {

    const {user, reviews: {reviews}} = useContext(Context)

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const form = new FormData();
        form.append("user_name", data.get("userName"))
        form.append("description", data.get("description") ? data.get("description") : "")
        form.append("rating", data.get("rating"))
        const response = await createReview(form);
        console.log(response)
    };

    const countRating = count => {
        let arr = []
        for (let i = 0; i < count; i++) {
            arr[i] = (<StarBorderIcon/>);
        }
        return arr;
    }

    return (
        <Container>
            {
                user.isAuth &&
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <Box>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Введите свое имя"
                            name="userName"
                            autoComplete="userName"
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="description"
                            label="Оставьте свой отзыв"
                            id="description"
                            autoComplete="description"
                        />
                        <Slider
                            size="small"
                            defaultValue={0}
                            max={5}
                            step={1}
                            marks
                            aria-required={true}
                            aria-label="Default"
                            height={20}
                            valueLabelDisplay="on"
                            name="rating"
                            id="rating"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Оставить отзыв
                        </Button>
                    </Box>
                </Box>
            }
            {
                reviews.map(({id, user_name, description, rating}) => (
                    <Card key={id} sx={{width: "100%", margin: "10px 0 50px 0"}}>
                        <CardContent key={"card__key" + id}>
                            <Typography key={"typography__key_1_" + id} variant="h5" component="div">
                                {user_name}
                            </Typography>
                            <Typography key={"typography__key_2_" + id} sx={{mb: 1.5}} color="text.secondary">
                                {countRating(rating)}
                            </Typography>
                            <Typography key={"typography__key_3_" + id} variant="body2">
                                {description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </Container>
    );
});

export default Review;