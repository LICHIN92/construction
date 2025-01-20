import React from 'react'
import './alert.css'
const Alertt = ({ message,heading ,err}) => {
    return (
        <div className='alertContainer'>
            <div className='messageBoxx'>
                <div className={err?"err":'messageheader'}>
                    {heading}
                </div>
                <div className='messagee'>
                    {message}

                </div>
            </div>
        </div>
    )
}

export default Alertt