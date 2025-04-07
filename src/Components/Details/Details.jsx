import React from 'react'
import './Detail.css'
import { MdLocationOn } from "react-icons/md";
import { SiFramework } from "react-icons/si";
const Details = ({ close, detail }) => {
    console.log(detail);

    return (
        <div className='detalContainer'>

            <div className='betailBox relative'>
                <img src={detail.pics[0]} alt="img" />
                <span className='flex items-center gap-1'> <MdLocationOn className='text-red-800 icons' /> {detail.place}</span>
                <span className='flex items-center gap-1'><SiFramework className='fill-yellow-300 ' />{detail.work}</span>
                <div className='mt-2  flex flex-col'>
                    <h4>About Work:</h4>
                    <p className='workDetails'>{detail.details}</p>
                </div>
                <div className="flex justify-center  bottom-0 right-1/2">
                    <span className='bg-orange-500 px-1 cursor-default font-extralight' onClick={() => close(false)}>close</span>

                </div>
            </div>

        </div>
    )
}

export default Details