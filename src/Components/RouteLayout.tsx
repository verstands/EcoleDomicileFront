import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import NavItems from './NavItems'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const RouteLayout = ({ }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlecloe = (e:any) => {
    if(e.target.id === "screen"){
      setOpenSidebar
    }
  }
  return (
    <>
      <div className='!bg-white bg-gradient-to-b bg-no-repeat from-gray-900 dark: to-black duration-300'>
        <div className='w-full relative'>
          <div className={`w-full relative ${active
            ? "bg-opacity-50 bg-gradient-to-b from-gray-900 to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b border-[#ffffff1c] shadow-xl transition duration-500 dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:fixed dark:top-0 dark:left-0 dark:w-full dark:h-[80px] dark:z-[80] dark:border-b dark:border-[#ffffff1c] dark:shadow-xl dark:transition dark:duration-500"
            : "w-full border-b border-[#ffffff1c] h-[80px] z-[80] shadow dark:border-[#ffffff1c] dark:shadow"}`}>
            <div className='w-[95%] 880px:w-[92%] m-auto py-2 h-full'>
              <div className="w-full h-[80px] flex items-center justify-between p-3">
                <div>
                  <Link to="" className={`text-[25px] font-Poppins font-[500] dark:text-white text-white `}>
                    Elearning
                  </Link>
                </div>
                <div className="flex items-center">
                  <NavItems
                    activeItems={0}
                    isMobile={false}
                  />
                  <div className='880px:hidden cursor-pointer'>
                    <FaBars 
                      size={30} 
                      color='white'

                    />
                  </div>
                  <div className="880px:hidden cursor-pointer">
                  <FaUserCircle
                      size={30} 
                      color='white'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            openSidebar && (
              <div className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
              onClick={handlecloe}
              id="screen"
              >

              </div>
            )
          }
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default RouteLayout