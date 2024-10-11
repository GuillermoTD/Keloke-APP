import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Providers from "./config/Providers"
import {
  RouterProvider,
} from "react-router-dom";

import Routers from "./config/Routers"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Routers}>
      <Providers>
        <App />
      </Providers>
    </RouterProvider>
  </StrictMode>
);
