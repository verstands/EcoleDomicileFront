import { BiBell } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Otbar = () => {

  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div>
           <div className="flex items-center gap-2">
            <img src="ec.jpg" width={50}  alt="" />
        <h2 className="text-[18px] font-bold">Eteyeloap</h2>

           </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[12px] mr-1 font-bold ">
            <Link to="/">
              <FaSearch size={20} className="font-bold size-4" />
            </Link>
          </div>
          <div className="text-[12px] mr-1 font-bold px-2 ">
            <Link to="/">
              <BiBell size={20} className="font-bold size-4" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[12px] bg-[#c5d8ea] border-[#c5d8ea] rounded-[50%] mr-1 font-bold px-2 py-2">
              <h2>
                RK
              </h2>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Otbar;
