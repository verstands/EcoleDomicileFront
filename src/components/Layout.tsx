import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Otbar from "./Otbar";
import { useEffect, useState } from "react";

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      {windowWidth > 640 ? (
        <div className="flex">
          <div className="md:basis-[17%] md:h-[100vh] sticky top-0">
            <Sidebar  />
          </div>
          <div className="md:basis-[83%] bg-[#f8f9fb] border">
            <Otbar onSidebarToggle={handleSidebarToggle} />
            <div className="p-4">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="basis-[100%] h-[100vh] p-2 relative">
          <Otbar onSidebarToggle={handleSidebarToggle} />
          {sidebarOpen && (
            <Sidebar />
          )}
          <div className="p-4">
            <Outlet />
          </div>
        </div>  
      )}
    </>
  );
};

export default Layout;
