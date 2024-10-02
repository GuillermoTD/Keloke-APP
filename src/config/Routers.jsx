import {
    createBrowserRouter
  } from "react-router-dom";

import ChatBoxEmpty from "../screens/ChatBoxEmpty"
import MainContainer from "../components/MainContainer"

const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainContainer/>,
        },
        {
            path: "/login",
            element: <h1>Hola soy login</h1>,
        },
    ]
)

export default Router