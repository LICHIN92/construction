import React from 'react'
import './about.css'
import Logo from '../../Components/Logomodal/Logo'
import immg from '../../assets/img/pexels-pixabay-51119.jpg'
const AboutUs = () => {
    return (
        <div className='aboutContaner'>
            {/* <img src={immg} alt="" /> */}

            <div className='aboutBox'>
                <h3>hello !</h3>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    We have recently started a company dedicated to cement plastering work,
                    backed by a highly skilled team with over 10 years of experience.
                    Our expertise spans all types of cement plastering projects, ensuring high-quality and durable finishes for every job.
                    We are committed to delivering exceptional craftsmanship and meeting the specific needs of our clients..
                </p>
            </div>
        </div>
    )
}

export default AboutUs