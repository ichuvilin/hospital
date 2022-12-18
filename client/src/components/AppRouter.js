import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Info from "../pages/Info";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {
                user.isAuth && authRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            {
                publicRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>}/>
                ))
            }
            <Route path="*" element={<Info/>}/>
        </Routes>
    );
});

export default AppRouter;