import { Outlet } from "react-router-dom";
import Providers from "./config/Providers";

function App() {
  return (
    <Providers>
      <div className="w-full h-full flex items-center justify-center">
        <Outlet />
      </div>
    </Providers>
  );
}

export default App;
