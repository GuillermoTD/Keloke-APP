import HeaderSidebar from './HeaderSidebar';
import SidebarMessage from './SidebarMessage';
import {ChatsContext} from "../contexts/ChatsContext"
import { useContext } from 'react';


const Sidebar = () => {

  // const {changeCurrent,currentChat} = useContext(ChatsContext)

  // console.log(changeCurrent)
  // console.log(currentChat)


  return (
    <div className="w-[35%] h-full">
      <HeaderSidebar />
      <div className="SidebarScroll ">
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
        <SidebarMessage />
      </div>
    </div>
  );
};

export default Sidebar;
