'use client';

// import { ThemeProvider } from 'acme-theme';
// import { AuthProvider } from 'acme-auth';

import {
    RouterProvider,
  } from "react-router-dom";

import Router from "./Routers"

function Providers({ children }) {
  return (
    <RouterProvider router={Router}>
      {children}
    </RouterProvider>
  );
}

export default Providers