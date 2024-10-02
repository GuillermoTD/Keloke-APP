import { Outlet } from 'react-router-dom';
// import MainContainer from './components/MainContainer';

function App() {
  return (
    <>
      <div className="bg-slate-400 w-full h-[100vh] flex items-center justify-center">
        <Outlet/>
      </div>
    </>
  );
}

export default App;
