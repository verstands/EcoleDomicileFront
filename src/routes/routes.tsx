import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import GestionClasse from '../Pages/GestionClasse/GestionClasse'
import Login from '../Pages/Login/Login'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Pharmacies from '../Pages/Pharmarcies/Pharmacies'
import Produit from '../Pages/Produits/Produit'
import Pays from '../Pages/Pays/Pays'
import Ville from '../Pages/Ville/Ville'
import Commune from '../Pages/Commune/Commune'
import Quartier from '../Pages/quartier/Quartier'


const IndexRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/gestionclasse' element={<GestionClasse />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/pharmacies' element={<Pharmacies />}></Route>
        <Route path='/produits' element={<Produit />}></Route>
        <Route path='/pays' element={<Pays />}></Route>
        <Route path='/ville' element={<Ville />}></Route>
        <Route path='/commune' element={<Commune />}></Route>
        <Route path='/quartier' element={<Quartier />}></Route>
      </Route>
      <Route path='/' element={<Login />}></Route>
      <Route path='/*' element={<Login />}></Route>

    </Routes>
  )
}

export default IndexRoute