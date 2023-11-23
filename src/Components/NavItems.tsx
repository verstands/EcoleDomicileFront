import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface NavItemsProps {
    activeItems: number;
    isMobile: boolean;
}

export const navItemData = [
    {
        name: "Accueil",
        url: "/"
    },
    {
        name: "Course",
        url: "/courses"
    },
    {
        name: "Apropos",
        url: "/about"
    }
]

const NavItems: React.FC<NavItemsProps> = ({ activeItems, isMobile }) => {
    console.log(isMobile);
    console.log(activeItems);

    return (
        <>
            <div className='800px:flex'>
                {navItemData.map((item, index) => (
                    <NavLink to={item.url} key={index} className={`
      ${activeItems === index
                            ? "dark:text-[#37a39a] text-[crimson]"
                            : "dark:text-white text-white"
                        } text-[18px] px-6 font-Poppins font-[400] `}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
            {isMobile && (
                <div className='800px:flex'>
                    {navItemData.map((item, index) => (
                        <NavLink to={item.url} key={index} className={`
                    ${activeItems === index
                                ? "dark:text-[#37a39a] text-[crimson]"
                                : "dark:text-white text-white"
                            } text-[18px] px-6 font-Poppins font-[400] `}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </>
    );
};

export default NavItems;