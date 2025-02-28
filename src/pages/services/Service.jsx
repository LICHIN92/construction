import React, { useEffect } from 'react'
import './service.css'
import carpenter from '../../assets/img/carpenter.avif'
import plumber from '../../assets/img/plumber.avif'
import electrician from '../../assets/img/electricaln.avif'
import Cement from '../../assets/img/plasterer-hand-rubber-glove-using-wooden-trowel-plastering-cement-brick-wall-background-1-768x512-jpg.webp'
import Paint from '../../assets/img/paint.avif'
import putty from '../../assets/img/putty.avif'
import gsap from 'gsap'

const Service = () => {
    const data = [
        { img: carpenter, work: "Carpentry" },
        { img: plumber, work: "plumbing" },
        { img: electrician, work: "Wiring" },
        { img: putty, work: "Putty Plastering" },
        { img: Cement, work: "Cement Plastering" },
        { img: Paint, work: "Paint Work" }

    ]
    useEffect(()=>{
        gsap.fromTo(".service", { x: -650 ,duration:20},{ x: 0 })
    })
    useEffect(()=>{
        gsap.to(".serviceCard",{duration:.5,opacity:.1,
            rotation: 360,
            opacity: 1,
            delay: .2,
            // stagger: 0.2,
            ease: "sine.out",
            force3D: true,})
    })
    return (
        <div className='serviceContainer'>
            <div>
                <h1 className='text-center capitalize service'>our services</h1>
                
            </div>
            <div className='flex flex-row gap-2 md:gap-4 justify-content-center flex-wrap'>
                {data.map((file, index) => (
                    <div key={index} className="serviceCard  bg-slate-500 ">
                        <img className='workImages' src={file.img} alt={file.work} />
                        <h4 className='capitalize ps-1 text-center'>{file.work}</h4>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Service