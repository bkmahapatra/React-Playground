import { Outlet } from "react-router-dom";
import "./App.css";
import SideBar from "./layouts/SideBar";

function App() {
  return (
    <div className="flex relative">
      <SideBar />

      <div className="flex-auto mx-auto ml-56 p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
