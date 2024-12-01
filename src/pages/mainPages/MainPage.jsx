import React from 'react'
import NavBaar from '../../Components/NavBar/NavBaar'
import Footer from '../../Components/footer/Footer'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      <NavBaar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainPage