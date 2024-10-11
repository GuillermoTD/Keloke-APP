import { createBrowserRouter } from "react-router-dom";

import ChatBoxEmpty from "../screens/ChatBoxEmpty";
import MainContainer from "../components/MainContainer";
import LoadingPage from "../screens/LoadingPage/LoadingPage";
import AuthPage from "../screens/AuthPage/AuthPage";
import Providers from "./Providers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Providers>
        <MainContainer />
      </Providers>
    ),
  },
  {
    path: "/auth",
    element: (
        <Providers>
            <AuthPage />
        </Providers>
    )
  },
]);

export default Router;
