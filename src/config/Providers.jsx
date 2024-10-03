'use client';

// import { ThemeProvider } from 'acme-theme';
// import { AuthProvider } from 'acme-auth';



import { ChatsProvider } from "../contexts/ChatsContext";

import Router from "./Routers"

function Providers({ children }) {
  return (

      <ChatsProvider>
        {children}
      </ChatsProvider>
  );
}

export default Providers