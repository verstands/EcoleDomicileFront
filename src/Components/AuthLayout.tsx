import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
      <Outlet />
      <div>AuthLayout</div>
    </>
  )
}

export default AuthLayout