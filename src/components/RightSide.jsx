

import { useContext, useEffect, useState } from "react";

import { ChatsContext } from "../contexts/ChatsContext";
import ChatBoxEmpty from "../screens/ChatBoxEmpty";
import ChatBox from "./Chatbox/ChatBox";

const RightSide = () => {
  const { activeScreen } = useContext(ChatsContext);

  useEffect(() => {}, [activeScreen]);

  if (activeScreen == "ChatItem") {
    return (
      <div className=" w-full h-full flex flex-col gap-[2rem] ">
       <ChatBox/>
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
