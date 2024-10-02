import { Outlet } from "react-router-dom"

import ChatScreen from "../screens/ChatScreen"

import {
    RouterProvider,
  } from "react-router-dom";

import Router from "../config/Routers"

import {Providers} from "../contexts/ChatsContext"



const RightSide = ()=>{
    return (
        <Providers>
            <div className="p-[1rem] w-full h-[90vh] flex flex-col items-center justify-center gap-[2rem] bg-green-300">
                <ChatScreen/>
            </div>
        </Providers>
    )
}


export default RightSide