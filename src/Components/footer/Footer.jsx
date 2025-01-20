import React from 'react'
import './footer.css'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    return (
        <div className='footerContainer'>
            <div className='logoo'>
                <h1>NK Construction</h1>
                <h6>construction company</h6>
            </div>
            <div className='address'>
                <div className=' address1'>
                    <MdLocationOn  className='location' />

                    <h5 >NK Building</h5>
                    <p>Moorippalam<br />Kuttiadi <br /> Kayakkodi</p>

                    <hr className='line' />
                </div>
                <div className='address2'>
                    <ul>
                        <li onClick={()=>navigate('/about')}>about</li>
                        <li onClick={()=>{navigate('/login')}}>login</li>
                        <li onClick={()=>navigate('/gallery')}>Gallery</li>
                        <li>services</li>
                        <li onClick={()=>navigate('/contact')}>contact</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer