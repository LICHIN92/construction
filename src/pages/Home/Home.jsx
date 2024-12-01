import React from 'react'
import './Home.css'
import CustomCarousel from '../../Components/cou/CustomCarousel'
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
            <p> &nbsp; Cement plastering is a durable and versatile method for achieving a smooth, strong finish on masonry surfaces. Water is mixed with cement and sand to create a plaster that enhances the strength and aesthetics of walls. Cement plastering combines the processes of base plastering and finishing, making construction efficient and long-lasting.</p>
         <p> &nbsp; NK construction Company is a small startup plastering company undertakes plastering contracting.
wheather your site is big or small ,we can do it at low cost.
 Our stringent quality and site project management makes as the first choice for all customers.   </p>
          </div>
          <div>
            <img src="https://www.jkcement.com/wp-content/uploads/2023/09/plasterer-hand-rubber-glove-using-wooden-trowel-plastering-cement-brick-wall-background-1-768x512-jpg.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home