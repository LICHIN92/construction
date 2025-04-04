import React, { useState } from 'react'
import './workservice.css'
import { useParams } from 'react-router-dom'
import cement from '../../assets/img/cememtplaster.jpg'
import { CiLight } from "react-icons/ci";
import { MdNightlight } from "react-icons/md";

const WorkService = () => {
    const { work } = useParams()
    const [dark, setDark] = useState(false)
    const Work_image = {
        'Cement Plastering': "../../assets/img/cement-plastering_BG.webp"
    }
    return (
        <div className={`${dark ? 'work-service_dark' : 'work-service_light'} min-h-[90vh]`}
            style={{ backgroundImage: `url(${Work_image[work]})` }}
        >
            <div className='relative flex items-center justify-between pt-2'>
                <h3>{work}</h3>
                <span className=' right-5 flex items-center justify-center'>
                    {dark ? <CiLight className='theme' onClick={()=>setDark(false)}/> : <MdNightlight className='theme' onClick={()=>setDark(true)}/>}
                </span>

            </div>
            <p className='text-wrap explain md:px'>&nbsp; "Our workers have more than 10 years of experience in {work}.
                {work == "Cement Plastering" && ` In our area most of the ${work} work is done by our workers. Our clients trust our workers, which is why they always contact us for all their construction needs,
                  and we strive to maintain their trust.`}
                {(work === 'Electrical Wiring' || work === 'Plumbing') && `They have completed their course at ITI and hold an NCVT certificate in ${work}." `}
            We are ready to do all kind of work.We guarantee to complete your job as quickly as possible with the best finish, using our most skilled workers."
            </p>
            <div>
                <div className="workImageContainer">
                    <img src={cement} alt="Cement Plastering" className="w-full h-auto work-img" />

                </div>
            </div>

        </div>
    )
}

export default WorkService