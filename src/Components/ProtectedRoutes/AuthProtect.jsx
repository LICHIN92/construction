import React from 'react'
import { Navigate } from 'react-router-dom'

const AuthProtect = ({ children }) => {
    const token = localStorage.getItem('token')
    if (token) {
        return children

    }
    return <Navigate to={'/'} replace />

}

export default AuthProtect