import { Outlet } from "react-router-dom";

import ChatScreen from "../screens/ChatScreen";

import { RouterProvider } from "react-router-dom";

import Router from "../config/Routers";

import { useContext, useEffect, useState } from "react";

import { ChatsContext } from "../contexts/ChatsContext";
import ChatBoxEmpty from "../screens/ChatBoxEmpty";

const RightSide = () => {
  const { activeScreen } = useContext(ChatsContext);

  useEffect(() => {}, [activeScreen]);

  if (activeScreen == "active") {
    return (
      <div className="p-[1rem] w-full h-[90vh] flex flex-col items-center justify-center gap-[2rem]">
        soy pantalla activa
      </div>
    );
  }

  return (
    <div className="p-[1rem] w-full h-[90vh] flex flex-col items-center justify-center gap-[2rem]">
      <ChatBoxEmpty />
    </div>
  );
};

export default RightSide;
