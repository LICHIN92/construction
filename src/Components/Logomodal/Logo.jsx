import React from 'react'
import './logo.css'
import logo from '../../assets/img/Untitled-removebg-preview.png'
const Logo = () => {
  return (
    <div className='logocontainerr'>
      <div className='logocontainer'>
        {/* <h2>          LC Construnction        </h2>

        <h6>          construction solution        </h6> */}
        <img src={logo} alt="" />
      </div>
    </div>
  )
}

export default Logo