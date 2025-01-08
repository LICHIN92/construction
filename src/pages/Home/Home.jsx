import React from 'react'
import './Home.css'
import CustomCarousel from '../../Components/cou/CustomCarousel'
import alling from '../../assets/img/all.webp'
const Home = () => {
  return (
    <div className='home_container'>
      <CustomCarousel />
      <div>
        <div className='box_container'>
          <div className="box">
            <h3>1000</h3>
            <p>completed Work</p>
          </div>
          <div className="box">
            <h3>best workers</h3>
            <p>more than 10 years experience</p>
          </div>
          <div className="box">
            <h3>best service</h3>
            <p>100% Customer Satisfation</p>
          </div>
        </div>
        <div className="welcome">
          <div className='statement'>
            <h4>welcome</h4>
            
         <p> &nbsp;
         NK Construction Company is a small startup specializing in construction and contracting services. Our expertise  includes <strong> <i> Electrical Wiring , Painting, Tile Flooring, Carpentry, Plumbing,</i></strong> and <b> <i>Putty Plastering  </i></b>. With a commitment to using quality materials and skilled craftsmanship, we deliver efficient and durable results for every project. Whether your job is big or small, our dedication to excellence makes us the trusted partner for all your construction requirements.           </p>
          </div>
          <div>
          <img src={alling} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home