import RightSide from './RightSide';
import Sidebar from './Sidebar/Sidebar';


const MainContainer = () => {
  return (
    <div className="bg-slate-100 w-[100vw] h-[100vh] shadow-lg rounded-md flex overflow-hidden">
        <Sidebar />
        <RightSide/>
    </div>
  );
};

export default MainContainer;
