import React from 'react'
import MainImage from "../assets/MainImage.svg"
import { Outlet } from "react-router-dom"

const ChatBoxEmpty = () => {
  return (
    <div className="w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[2rem]">
            {/* Main Image when there is no image open */}
            <img src={MainImage} alt="MainImage" className="w-[40%] h-[40%]"/>
            {/* Title of Main Page */}
            <h2 className="font-medium text-[1.8rem]">Chat with your dear friends and family!</h2>
        </div>
    </div>
  )
}

export default ChatBoxEmpty