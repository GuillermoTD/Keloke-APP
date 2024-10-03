import RightSide from './RightSide';
import Sidebar from './Sidebar';
import Router from "../config/Routers"
import {useState} from "react"
import Providers from '../config/Providers';


const MainContainer = () => {
  return (
    <div className="bg-slate-100 w-[95%] h-[90%] shadow-lg rounded-md flex overflow-hidden">
      <Providers>
        <Sidebar />
        <RightSide/>
      </Providers>
    </div>
  );
};

export default MainContainer;
