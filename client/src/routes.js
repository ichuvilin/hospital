import {
    ADMIN_ROUTER,
    INFO_ROUTER,
    LOGIN_ROUTER,
    PROFILE_ROUTER, RECORD_ROUTER,
    REGISTRATION_ROUTER,
    REVIEW_ROUTER
} from "./utils/consts";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Info from "./pages/Info";
import Profile from "./pages/Profile";
import Record from "./pages/Record";
import Review from "./pages/Review";

export const authRoutes = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
    {
        path: PROFILE_ROUTER,
        Component: Profile
    },
    {
        path: RECORD_ROUTER,
        Component: Record
    },
]


export const publicRoutes = [
    {
        path: LOGIN_ROUTER,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Auth
    },
    {
        path: REVIEW_ROUTER,
        Component: Review
    },
    {
        path: INFO_ROUTER,
        Component: Info
    }
]