import React from 'react'
import './footer.css'
import { MdLocationOn } from 'react-icons/md'
const Footer = () => {
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
                        <li>about</li>
                        <li>portfolio</li>
                        <li>Gallery</li>
                        <li>services</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer