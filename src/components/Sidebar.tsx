import { Link } from 'react-router-dom'
import { FaArrowRight, FaBriefcase, FaHome, FaQuestionCircle, FaUserCircle, FaUsers } from 'react-icons/fa';
import { BiBarChartAlt2, BiBullseye, BiUser } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <>
            <div className='bg-dark-theme p-2 h-24 flex items-center gap-2 justify-center'>
                <FaUserCircle size={50} />
                <div>
                    <p className='font-bold'>Rabby Kikwele</p>
                    <p className="text-[12px]">Professeur</p>
                </div>
            </div>
            <hr />
            <div className='h-screen px-[50px]'>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaHome color='#7d839d' />
                    <Link to='/' className='text-[12px] leading-[20px]  text-[#7d839d]'>Tableau de bord</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaUsers color='#7d839d' />
                    <Link to='/gestionclasse' className='text-[12px] leading-[20px]  text-[#7d839d]'>Gestion de classe</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiUser color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Gestion des étudiants </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiBarChartAlt2 color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>La planification </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaBriefcase color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Gestion des notes </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <BiBullseye color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Suivi de présence </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaArrowRight color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Gestion des affectations  </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaQuestionCircle color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Quiz et examen   </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaBriefcase color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Gestion des ressources   </Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <FaBriefcase color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Professionnel</Link>
                </div>
                <div className='flex items-center  gap-[15px] py-[15px]'>
                    <AiOutlineSetting color='#7d839d' />
                    <Link to='/PaiementFormulaire' className='text-[12px] leading-[20px]  text-[#7d839d]'>Parametres</Link>
                </div>
            </div >
        </>
    )
}

export default Sidebar