import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaCity, FaCog, FaGlobeAfrica, FaHome, FaHospitalAlt, FaLocationArrow, FaMapMarkerAlt, FaSignInAlt, FaSignOutAlt, FaUserCircle, FaUsers } from 'react-icons/fa';
import { BiPackage } from 'react-icons/bi';

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    const navigate = useNavigate();

    const Deconnexion = () => {
        navigate("/");
        sessionStorage.clear();
      };
    return (
        <>
            <div></div>
            <div className='bg-dark-theme p-2 h-24 flex bg-green-700  items-center bg gap-2 justify-center'>
                <FaUserCircle size={50} color='white' />
                <div>
                    <p className='font-bold text-white'>Rabby Kikwele</p>
                    <p className="text-[12px] text-white">Administrateur</p>
                </div>
            </div>
            <hr className='pb-2 bg-green-700' />
            <div className='h-screen px-[50px] bg-green-700 '>
            <div className={`flex items-center gap-[15px] py-[15px] ${isActive('/dashboard') ? 'border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold' : ''}`}>
                    <FaHome color='#ffffff' size={20} />
                    <Link to='/dashboard' className='text-[12px] leading-[20px]  text-white'>Tableau de bord</Link>
                </div>
                <div className={`flex items-center gap-[15px] py-[15px] ${isActive('/pharmacies') ? 'border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold' : ''}`}>
                    <FaHospitalAlt color='#ffffff' size={20} />
                    <Link to='/pharmacies' className='text-[15px] leading-[20px]    text-white'>Pharmacies</Link>
                </div>
                <div className={`flex items-center gap-[15px] py-[15px] ${isActive('/produits') ? 'border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold' : ''}`}>
                    <BiPackage color='#ffffff' size={20} />
                    <Link to='/produits' className='text-[15px] leading-[20px]    text-white'>Produits </Link>
                </div>
                <div className={`flex items-center gap-[15px] py-[15px] ${isActive('/pays') ? 'border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold' : ''}`}>
                    <FaGlobeAfrica color='#ffffff' size={20} />
                    <Link to='/pays' className='text-[15px] leading-[20px]    text-white'>Pays </Link>
                </div>
                <div className={`flex items-center gap-[15px] py-[15px] ${isActive('/commune') ? 'border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold' : ''}`}>
                    <FaLocationArrow color='#ffffff' size={20} />
                    <Link to='/commune' className='text-[15px] leading-[20px]    text-white'>Commenue </Link>
                </div>
                <div className={`flex items-center gap-[15px] py-[15px] ${isActive('/ville') ? 'border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold' : ''}`}>
                    <FaCity color='#ffffff' size={20} />
                    <Link to='/ville' className='text-[15px] leading-[20px]    text-white'>Ville </Link>
                </div>
                <div className={`flex items-center gap-[15px] py-[15px] ${isActive('/quartier') ? 'border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold' : ''}`}>
                    <FaMapMarkerAlt color='#ffffff' size={20} />
                    <Link to='/quartier' className='text-[15px] leading-[20px]    text-white'>Quartier  </Link>
                </div>
                <div className={`flex items-center gap-[15px] py-[15px] ${isActive('/user') ? 'border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold' : ''}`}>
                    <FaUsers color='#ffffff' size={20} />
                    <Link to='/user' className='text-[15px] leading-[20px]    text-white'>Utilisateurs</Link>
                </div>
                <div>
                    <button
                      onClick={Deconnexion}
                       className=' py-[15px]   text-white'
                    >
                      <div className="flex items-center gap-2">
                        <FaSignInAlt />
                        <span className='text-[15px] leading-[20px]'>Déconnexion</span>
                      </div>
                    </button>
                  </div>
            </div >
        </>
    )
}

export default Sidebar