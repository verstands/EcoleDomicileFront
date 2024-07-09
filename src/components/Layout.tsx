import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Otbar from "./Otbar";

const Layout = () => {
  return (
    <div className="flex">
      <div className="md:basis-[17%] md:h-[100vh] sticky top-0">
        <Sidebar />
      </div>
      <div className="md:basis-[83%] bg-[#f8f9fb] border">
        <Otbar />
       <div className="p-4">
       <Outlet />
       </div>
      </div>
    </div>
  );
};

export default Layout;
