import "./App.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./layouts/SideBar";

function App() {
  useEffect(() => {
    console.log(globalThis.innerHeight);
  }, []);

  return (
    <div className="flex relative">
      <SideBar />

      <div
        className="flex-auto mx-auto ml-56 p-2"
        aria-label="Content"
        aria-description=""
      >
        {/* <TestLoop /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
