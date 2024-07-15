import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const LayoutSite = () => {
  const [active, setActive] = useState(false)

  

  return (
    <div className={`${active ? 
        "darki:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500" 
        :"w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow-xk"}`}>
    <Outlet />
    </div>
  )
}

export default LayoutSite