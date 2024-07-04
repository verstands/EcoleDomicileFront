import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import LayoutSite from '../components/LayoutSite'


const IndexRoute = () => {
  return (
    <Routes>
        <Route element={<LayoutSite />}>
            <Route path='/' element={<Home />}></Route>
        </Route>
     </Routes>
  )
}

export default IndexRoute