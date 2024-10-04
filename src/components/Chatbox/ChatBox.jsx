import React from 'react'
import "./Chatbox.css"
import { Plus, Smile,Mic, Video, Search, EllipsisVertical } from 'lucide-react';

const ChatBox = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
        {/* Header */}
        <div className=" h-[4rem] w-full border-[0.118rem] bg-white flex items-center justify-between px-[2rem]">
            <p>Juan Martinez</p>
            <div className="flex gap-[1.3rem]">
              <Video size={22} strokeWidth={1.5} />
              <Search size={20} strokeWidth={1.5} />
              <EllipsisVertical  size={22} strokeWidth={1.5}/>
            </div>
        </div>

        {/* Chats */}
        <div className="ChatsContainer w-full h-full bg-slate-200 flex flex-col gap-[2rem] p-[0.4rem] overflow-scroll overflow-x-hidden pb-[1rem]">
            <div className="Person1 ">
              <div className="MessagePerson1">
                <p>Hola</p>
              </div>
            </div>

            <div className="Person2">
              <div className="MessagePerson2">
                <p>Como estas?</p>
              </div>
            </div>

            <div className="Person1 ">
              <div className="MessagePerson1">
                <p>Muy bien y tu?</p>
              </div>
            </div>

            <div className="Person2">
              <div className="MessagePerson2">
                <p>Que bien, estamos bien gracias a Dios</p>
              </div>
            </div>

            <div className="Person2">
              <div className="MessagePerson2">
                <p>Podrias traerme un jugo cuando regreses de recreo</p>
              </div>
            </div>

            <div className="Person1 ">
              <div className="MessagePerson1">
                <p>Claro no hay problema.</p>
              </div>
            </div>

            <div className="Person1 ">
              <div className="MessagePerson1">
                <p>De que sabor te gusta?</p>
              </div>
            </div>

            <div className="Person2 ">
              <div className="MessagePerson2">
                <p>Fresa</p>
              </div>
            </div>


            <div className="Person1 ">
              <div className="MessagePerson1">
                <p>Esta bien</p>
              </div>
            </div>
        </div>

        {/* Input */}
        <div className="h-[5rem] w-full bg-white border-[4px] flex items-center px-[1rem] gap-[1rem]">
            <div className="flex gap-[1rem]">
            <button className='ButtonIcon'>
              <Smile size={22} strokeWidth={1.5}/>
            </button>

            <button className='ButtonIcon'>
              <Plus size={22} strokeWidth={1.5}/>
            </button>
            </div>
            <input className="w-full h-full focus:outline-none" type="text" placeholder="Escribe tu mensaje" />
            <button className='ButtonIcon'>
              <Mic size={22} strokeWidth={1.5}/>
            </button>
        </div>
    </div>
  )
}

export default ChatBox