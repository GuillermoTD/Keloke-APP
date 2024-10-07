import React, { useState } from 'react'
import "./Chatbox.css"
import { Plus, Smile,Mic, Video, Search, EllipsisVertical } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';

const ChatBox = () => {
const [showEmojiPicker, setShowEmojiPicker] = useState(false)
const [message, setMessage] = useState("")

const handleEmojiClick = (emoji)=>{
  setMessage(prevMessage => prevMessage + emoji)
  console.log("emoji agregado")
  console.log(message)
}
  
  return (
    <div className="w-full h-full flex flex-col items-center">
        {/* Header */}
        <div className=" h-[4rem] w-full border-[0.118rem] bg-white flex items-center justify-between px-[2rem]">
            <p>Juan Martinez</p>
            <div className="flex gap-[1.3rem]">
            <button className='ButtonIcon'>
              <Video size={22} strokeWidth={1.5} />
            </button>

            <button className='ButtonIcon'>
              <Search size={20} strokeWidth={1.5} />
            </button>

            <button className='ButtonIcon'>
              <EllipsisVertical  size={22} strokeWidth={1.5}/>
            </button>
            </div>
        </div>

        {/* Chats */}
        <div className="ChatsContainer w-full h-full bg-slate-200 flex flex-col gap-[2rem] p-[0.4rem] overflow-scroll overflow-x-hidden py-[2rem] ">
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
        <div className="h-[5rem] w-full bg-white border-[4px] flex items-center px-[1rem] gap-[1rem] relative">
          {/* Emojibox picker */}
          {
            showEmojiPicker ?  
            <EmojiPicker 
                  style={{position:"absolute", top:"-28rem",left:"-0.25em"}} 
                  width={"330px"} 
                  height={"450px"} 
                  onEmojiClick={(e)=>handleEmojiClick(e.emoji)}
                  onBlur={()=>console.log("prueba de blur")}
            />          
            : null
          }

            <div className="flex gap-[1rem]">
              <button className='ButtonIcon' onClick={()=>setShowEmojiPicker(!showEmojiPicker)} >
                
                <Smile size={22} strokeWidth={1.5}/>
              </button>

              <button className='ButtonIcon'>
                <Plus size={22} strokeWidth={1.5}/>
              </button>
            </div>

              <input 
                  className="w-full h-full focus:outline-none" 
                  type="text" 
                  placeholder="Escribe tu mensaje" 
                  onFocus={()=>setShowEmojiPicker(false)}
                  onChange={(e)=>setMessage(e.target.value)}
                  value={message}
              />

              <button className='ButtonIcon'>
                <Mic size={22} strokeWidth={1.5}/>
              </button>
        </div>
    </div>
  )
}

export default ChatBox