import React from 'react'
import { Search } from 'lucide-react';


const SidebarInput = () => {
  return (
    <div className="bg-slate-200 h-[2.1rem] w-full px-[1.2rem] flex items-center gap-[1rem]">
        <button className='ButtonIcon'>
            <Search size={12} strokeWidth={2} />
        </button>

        <input type="text" className=" bg-slate-200 text-[0.7rem] h-[90%] w-full bg-none border-none focus:outline-none rounded-md " 
                placeholder="Escribe un chat"
        />
    </div>
  )
}

export default SidebarInput