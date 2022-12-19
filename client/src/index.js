import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import UserStore from "./store/UserStore";
import DoctorStore from "./store/DoctorStore";
import ReviewStorage from "./store/ReviewStorage";
import BranchStore from "./store/BranchStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            doctors: new DoctorStore(),
            reviews: new ReviewStorage(),
            branch: new BranchStore()
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);

