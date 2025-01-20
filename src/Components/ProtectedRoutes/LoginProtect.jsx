import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const LoginProtect = ({ children }) => {
     const { user } = useSelector(state => state.user?.user)
    console.log(user?.Admin);
    
    const token = localStorage.getItem('token')
    if (token && user?.Admin) {
        return <Navigate to={'/'} />
    }
    return children

}
export default LoginProtect