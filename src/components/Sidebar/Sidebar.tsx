import HeaderSidebar from '../HeaderSidebar';
import ChatItem from '../ChatItem';
// import {ChatsContext} from "../contexts/ChatsContext"
// import { useContext } from 'react';
import "./Sidebar.css"
import SidebarInput from "../SidebarInput"

const Sidebar = () => {

  // const {changeCurrent,currentChat} = useContext(ChatsContext)

  // console.log(changeCurrent)
  // console.log(currentChat)

  return (
    <div className="w-[35%] h-[98vh]">
      <HeaderSidebar />
      <SidebarInput/>
      <div className="SidebarScroll">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
};

export default Sidebar;
