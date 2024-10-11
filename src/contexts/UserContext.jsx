import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        username:"",
        userData:{}
    })
    return (
      <UserContext.Provider value={{ user,setUser }}>
        {children}
      </UserContext.Provider>
    );
  };

export {UserProvider,UserContext}