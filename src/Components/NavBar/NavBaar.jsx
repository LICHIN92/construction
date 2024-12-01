import React, { useEffect, useState } from 'react'
import './Navrbaar.css'
import Logo from '../Logomodal/Logo'
const NavBaar = () => {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    // Set the status to true after 500ms
    const timeout = setTimeout(() => {
      setStatus(true);
    }, 4000);

    // Clean up the timeout on component unmount
    // return () => clearTimeout(timeout);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbarr'>
      {
        !status && <Logo />
      }

      <div className='logooo'>

        <h3>NK Construction</h3>
        <h6>construction company</h6>
      </div>
      <div className='ulli'>
        <button
          className="hamburger-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✖' : '☰'}
        </button>



        <ul className={menuOpen ? 'active' : ''}>
          <li tabIndex="0">HOME</li>
          <li tabIndex="0">ABOUT</li>
          <li tabIndex="0">GALLERY</li>
          <li tabIndex="0">CONTACT</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBaar