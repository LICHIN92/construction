import React from 'react'
import './alert.css'
const Alertt = ({ message }) => {
    return (
        <div className='alertContainer'>
            <div className='messageBoxx'>
                <div className='messageheader'>
                    thank you for message
                </div>
                <div className='messagee'>
                    {message}

                </div>
            </div>
        </div>
    )
}

export default Alertt