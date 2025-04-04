import React from 'react'
import './footer.css'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    return (
        <div className='footerContainer'>
            <div className='logoo'>
                <h1>LC Construction</h1>
                <h6>construction solution</h6>
            </div>
            <div className='address'>
                <div className=' address1'>
                    <MdLocationOn className='location' />

                    <h5 >NK Building</h5>
                    <p>Moorippalam<br />Kuttiadi <br /> Kayakkodi</p>
                    {/* <iframe
                        title="LC Construction Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.263030090533!2d75.74338177409997!3d11.675761941963957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba67ff82bfa832f%3A0x75e76071d565c51f!2sChola%20house!5e0!3m2!1sen!2sin!4v1738036432531!5m2!1sen!2sin"
                        // style={{ border: 'none', width: '100%', height: '200px' }}
                        className='m-1  w-45 h-50'
                        loading="lazy"
                    ></iframe> */}
                    
                    <hr className='line' />
                </div>
                <div className='address2'>
                    <ul>
                        <li onClick={() => navigate('/about')}>about</li>
                        <li onClick={() => { navigate('/login') }}>login</li>
                        <li onClick={() => navigate('/gallery')}>Gallery</li>
                        <li onClick={() => navigate('/service')}>services</li>
                        <li onClick={() => navigate('/contact')}>contact</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer