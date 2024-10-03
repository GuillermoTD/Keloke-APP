import React from 'react'
import "./Chatbox.css"


const ChatBox = () => {
  return (
    <div className="w-full h-full flex flex-col items-center ">
        {/* Header */}
        <div className=" h-[4rem] w-full border-[0.118rem] bg-white flex items-center justify-between px-[2rem]">
            <p>Juan Martinez</p>
            <div>Icons</div>
        </div>

        {/* Chats */}
        <div className="w-full h-full bg-slate-500 flex">
            <div className="Person1 ">Hola</div>
            <div className="Person2">Como estas</div>
        </div>
        {/* Input */}
        <div className="h-[4rem] w-full bg-blue-300">
            escribe algo
        </div>
    </div>
  )
}

export default ChatBox