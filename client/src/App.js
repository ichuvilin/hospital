import React, {useContext, useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/navigation/Footer";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {fetchBranch, fetchDoctor, fetchReviews} from "./http/otherAPI";


const App = observer(() => {

    const {user, doctors, reviews, branch} = useContext(Context)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then(data => {
            user.setUser(data);
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
        fetchDoctor().then(data => doctors.setDoctors(data))
        fetchReviews().then(data => reviews.setReviews(data))
        fetchBranch().then(data => branch.setBranch(data))
    }, [])

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
            {/*<Footer/>*/}
        </BrowserRouter>
    );
})

export default App;
