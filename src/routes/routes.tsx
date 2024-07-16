import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Layout from '../components/Layout'
import GestionClasse from '../Pages/GestionClasse/GestionClasse'
import GestionEtudiant from '../Pages/GestionEtudiant/GestionEtudiant'
import SuiviScolaire from '../Pages/SuiviScolaire/SuiviScolaire'
import Encadrement from '../Pages/Encadrement/Encadrement'
import OptionFinaliste from '../Pages/OptionFinaliste/OptionFinaliste'
import QuizMaison from '../Pages/QuizMaison/QuizMaison'
import EncadrementSpecial from '../Pages/EncadrementFormation/EncadrementSpecial'


const IndexRoute = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/gestionclasse' element={<GestionClasse />}></Route>
            <Route path='/gestionetudiant' element={<GestionEtudiant />}></Route>
            <Route path='/suiviscolaire' element={<SuiviScolaire />}></Route>
            <Route path='/encadrementformation' element={<Encadrement />}></Route>
            <Route path='/optionfinalite' element={<OptionFinaliste />}></Route>
            <Route path='/quizmaison' element={<QuizMaison />}></Route>
            <Route path='/Endrementformation' element={<EncadrementSpecial />}></Route>
        </Route>
     </Routes>
  )
}

export default IndexRoute