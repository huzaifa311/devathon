import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const AuthRoute = () => {
    return !localStorage.getItem('user') ? (
        <Outlet />
    ) : (
        <Navigate to={'/private'} />
  )
}

export default AuthRoute