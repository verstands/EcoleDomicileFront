import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Layout from '../components/Layout'


const IndexRoute = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
        </Route>
     </Routes>
  )
}

export default IndexRoute