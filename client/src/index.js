import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import UserStore from "./store/UserStore";
import DoctorStore from "./store/DoctorStore";
import ReviewStorage from "./store/ReviewStorage";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            doctors: new DoctorStore(),
            reviews: new ReviewStorage()
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);

