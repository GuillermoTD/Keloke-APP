import { useContext } from "react";
import {ChatsContext} from "../contexts/ChatsContext"


const SidebarMessage = () => {

  const {changeScreen,currentChat} = useContext(ChatsContext)


  return (
    <div className="h-[4rem] border-[0.12rem] w-full flex items-center px-[1rem] gap-[5%]" onClick={()=>{
      console.log("funcionó")
      changeScreen("active",{saludo:"test1"})
    }}>
      <div className="w-[2.6rem] h-[2.6rem] bg-emerald-300 rounded-full text-[3px]"></div>

      <div className="flex items-center justify-between w-[80%] overflow-hidden">
        <div className="flex flex-col gap-[4px]">
          <p className="text-[0.8rem] font-medium	">Papolo Rodriguez</p>
          <p className="text-[0.7rem] w-[10rem] truncate">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
            nam, porro nostrum ducimus corporis quam eligendi,
          </p>
        </div>

        <p className="text-[0.6rem]">1:30 PM</p>
      </div>
    </div>
  );
};

export default SidebarMessage;
