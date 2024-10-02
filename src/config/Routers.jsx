import {
    createBrowserRouter
  } from "react-router-dom";

import MainContainer from "../components/MainContainer"

const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainContainer/>,
          },
    ]
)

export default Router