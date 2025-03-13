import React from 'react'
import './workservice.css'
import { useParams } from 'react-router-dom'
const WorkService = () => {
    const { work } = useParams()
    return (
        <div className=' work-service min-h-[70vh]'>
            <h1>{work}</h1>
            <p className='text-wrap '> Our workers have more than 10 years experience in {work}.
                 {work=="Cement Plastering" && ` In our area most of the ${work} work is done by our workers. our client believe in our workers
                 due to that they always contact us for their all the work, so we try to keep their trust.`}
            </p>
            <div>

            </div>

        </div>
    )
}

export default WorkService