import {
    createBrowserRouter
  } from "react-router-dom";

import ChatBoxEmpty from "../screens/ChatBoxEmpty"
import MainContainer from "../components/MainContainer"
import LoadingPage from "../screens/LoadingPage/LoadingPage";
import AuthPage from "../screens/AuthPage/AuthPage"

const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoadingPage/>,
        },
        {
            path: "/auth",
            element: <AuthPage/>
        },
    
    ]
)

export default Router