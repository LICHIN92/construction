import React from 'react'
import './workservice.css'
import { useParams } from 'react-router-dom'
const WorkService = () => {
    const { work } = useParams()
    return (
        <div className=' work-service min-h-[70vh]'>
            <h1>{work}</h1>
            <p> Our workers have more than 10 years experience in {work} 
            </p>
            <div>

            </div>

        </div>
    )
}

export default WorkService