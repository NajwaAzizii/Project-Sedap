import { DiAndroid } from "react-icons/di"; 
import { createRoot } from "react-dom/client";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
  <div id="app-container" className="bg-gray-100 min-h-screen flex">
    <div id="layout-wrapper" className="flex flex-row flex-1">
      <Sidebar />
      <div id="main-content" className="flex-1 p-4">
        <Header />
        <Dashboard />
      </div>
    </div>
  </div>

  // <div>
  //   <div className=" flex flex-col ">
  //     <span className="font-poppins-extrabold font-[1000] text-[48px]"><DiAndroid />Sedap<b className="text-green-500">.</b></span>
  //     <span className="text-gray-400 font-semibold font-barlow">Modern Admin Dashboard</span>
  // </div>
  // </div>
);