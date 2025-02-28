import React from 'react'
import './about.css'
import Logo from '../../Components/Logomodal/Logo'
import immg from '../../assets/img/pexels-pixabay-51119.jpg'
import constr from '../../assets/img/constr.svg'
const AboutUs = () => {
    return (
        <div className='aboutContaner'>
            {/* <img src={immg} alt="" /> */}

            <div className='aboutBox'>
                <div className=' flex justify-center items-center'>
                <h3>hello !</h3>
                <img className='consttr' src={constr}/>
                </div>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* We have recently started a solution dedicated to cement plastering work,
                    backed by a highly skilled team with over 10 years of experience.
                    Our expertise spans all types of cement plastering projects, ensuring high-quality and durable finishes for every job.
                    We are committed to delivering exceptional craftsmanship and meeting the specific needs of our clients.. */}

                    We have recently launched a dedicated solution specializing in cement plastering, tile flooring,
                    putty plaster, electrical wiring, plumbing, and painting work.
                    Backed by a highly skilled team with over 10 years of experience,
                    we ensure top-quality craftsmanship and durable finishes for every project.
                    Our expertise spans all types of cement plastering and related services,
                    allowing us to meet the specific needs of our clients with precision and excellence.
                </p>
            </div>
        </div>
    )
}

export default AboutUs