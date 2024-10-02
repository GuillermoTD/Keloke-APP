import RightSide from './RightSide';
import Sidebar from './Sidebar';
import Router from "../config/Routers"
import {useState} from "react"



const MainContainer = () => {
  return (
    <div className="bg-slate-100 w-[95%] h-[90%] shadow-lg rounded-md flex overflow-hidden">
      <Sidebar />
      <RightSide/>
    </div>
  );
};

export default MainContainer;
