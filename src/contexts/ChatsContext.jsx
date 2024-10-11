import { createContext, useState, useEffect } from "react";

export const ChatsContext = createContext();

export const ChatsProvider = ({ children }) => {
  const [activeScreen, setActiveScreen] = useState("Active");
  const [currentChat, setCurrentChat] = useState({});

  const changeScreen = (screen, chat = null) => {
    setActiveScreen(screen);
    // set chat in case is neccesary
    if (chat) {
      setCurrentChat(chat);
    }
  };

  useEffect(() => {
 
  }, [currentChat,activeScreen]);


  return (
    <ChatsContext.Provider value={{ activeScreen, currentChat, changeScreen }}>
      {children}
    </ChatsContext.Provider>
  );
};
