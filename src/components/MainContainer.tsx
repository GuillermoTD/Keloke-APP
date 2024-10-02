import RightSide from './RightSide';
import Sidebar from './Sidebar';

const Main = () => {
  return (
    <div className="bg-slate-100 w-[95%] h-[90%] shadow-lg rounded-md flex ">
      <Sidebar />
      <RightSide/>
    </div>
  );
};

export default Main;
