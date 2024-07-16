import { useState } from "react";
import { BiBell } from "react-icons/bi";
import { FaArrowRight, FaBars, FaSearch, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Otbar = ({ onSidebarToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    onSidebarToggle();
  };
  return (
    <>
      <div className="flex items-center border border-[#0476e8] bg-[#0476e8] justify-between p-5 shadow-xl ">
        <div>
          <div className="flex items-center gap-2">
            <div>
              {menuOpen ? (
                <FaArrowRight
                  size={20}
                  color="white"
                  onClick={handleMenuToggle}
                />
              ) : (
                <FaBars size={20} color="white" onClick={handleMenuToggle} />
              )}
            </div>
            <img src="ec.jpg" width={50} alt="" />
            <h2 className="text-[18px] text-white font-bold">Eteyeloap</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[12px] mr-1 font-bold ">
            <Link to="/">
              <FaSearch color="white" size={20} className="font-bold size-4" />
            </Link>
          </div>
          <div className="text-[12px] mr-1 font-bold px-2 ">
            <Link to="/">
              <BiBell size={20} color="white" className="font-bold size-4" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[12px] text-white bg-[#c5d8ea] border-[#c5d8ea] rounded-[50%] mr-1 font-bold px-2 py-2">
              <h2 className="text-black">RK</h2>
            </div>
          </div>
          <FaSignInAlt size={20} color="white" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Otbar;
