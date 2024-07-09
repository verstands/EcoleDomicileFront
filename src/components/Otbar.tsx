import { BiBell } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Otbar = () => {

  return (
    <>
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[18px] font-bold">Ecole Domicile</h2>
        <div className="flex items-center gap-2">
          <div className="text-[12px] mr-1 font-bold ">
            <Link to="/">
              <FaSearch className="font-bold size-4" />
            </Link>
          </div>
          <div className="text-[12px] mr-1 font-bold px-2 ">
            <Link to="/">
              <BiBell className="font-bold size-4" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[12px] bg-[#c5d8ea] border-[#c5d8ea] rounded-[50%] mr-1 font-bold px-2 py-2">
              <h2>
                dd
              </h2>
            </div>
            <div>
              dd
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Otbar;
