import {
    createBrowserRouter
  } from "react-router-dom";

import ChatBoxEmpty from "../screens/ChatBoxEmpty"
import MainContainer from "../components/MainContainer"
import LoadingPage from "../screens/LoadingPage/LoadingPage";

const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LoadingPage/>,
        },
        {
            path: "/login",
            element: <h1>Hola soy login</h1>,
        },
    ]
)

export default Router