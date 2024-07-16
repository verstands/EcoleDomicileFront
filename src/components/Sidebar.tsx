import { Link } from 'react-router-dom'
import { FaArrowRight, FaBriefcase, FaHome, FaUserCircle, FaUsers } from 'react-icons/fa';
import { BiBarChartAlt2, BiBullseye, BiUser } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <>
            <div></div>
            <div className='bg-dark-theme p-2 h-24 flex bg-[#0476e8] rounded-tr-[50px] items-center bg gap-2 justify-center'>
                <FaUserCircle size={50} color='white' />
                <div>
                    <p className='font-bold text-white'>Rabby Kikwele</p>
                    <p className="text-[12px] text-white">Professeur</p>
                </div>
            </div>
            <hr className='pb-2 bg-[#0476e8]' />
            <div className='h-screen px-[50px] bg-[#0476e8] '>
                <div className='flex items-center  gap-[15px] py-[15px] border border-[#fc9401] bg-[#fc9401] p-2 w-full rounded-xl font-bold'>
                    <FaHome color='#ffffff' size={20} />
                    <Link to='/' className='text-[12px] leading-[20px]  text-white'>Tableau de bord</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaUsers color='#ffffff' size={20} />
                    <Link to='/suiviscolaire' className='text-[15px] leading-[20px]    text-white'>Suivis Scolaires</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiUser color='#ffffff' size={20} />
                    <Link to='/encadrementformation' className='text-[15px] leading-[20px]    text-white'>Encadrement et Formations </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiBarChartAlt2 color='#ffffff' size={20} />
                    <Link to='/optionfinalite' className='text-[15px] leading-[20px]    text-white'>Option pour Finaliste EXETA </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaBriefcase color='#ffffff' size={20} />
                    <Link to='/quizmaison' className='text-[15px] leading-[20px]    text-white'>Quiz et jeux </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiBullseye color='#ffffff' size={20} />
                    <Link to='/Endrementformation' className='text-[15px] leading-[20px]    text-white'>Formations spéciales </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaArrowRight color='#ffffff' size={20} />
                    <Link to='/suiviscolaire' className='text-[15px] leading-[20px]    text-white'>Suivis Cursus Scolaire  </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <AiOutlineSetting color='#ffffff' size={20} />
                    <Link to='/PaiementFormulaire' className='text-[15px] leading-[20px]    text-white'>Parametres</Link>
                </div>
            </div >
        </>
    )
}

export default Sidebar