import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/SignIn/Signin";
import LandingPage from "../Pages/LandingPage/LandingPage";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {index : true , element: <LandingPage />},
            {path : "/signup", element: <Signup/>},
            {path : "/signin", element: <Signin/>}
        ],
    }
])

export default AppRouter;