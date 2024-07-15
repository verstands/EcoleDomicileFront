import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Layout from '../components/Layout'
import GestionClasse from '../Pages/GestionClasse/GestionClasse'
import GestionEtudiant from '../Pages/GestionEtudiant/GestionEtudiant'


const IndexRoute = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/gestionclasse' element={<GestionClasse />}></Route>
            <Route path='/gestionetudiant' element={<GestionEtudiant />}></Route>
        </Route>
     </Routes>
  )
}

export default IndexRoute