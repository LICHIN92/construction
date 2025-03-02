import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'

const WhatsApp = () => {
    const phoneNumber="+918086200861"
  return (
    <a   href={`https://wa.me/${phoneNumber}`}
    className="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer">
        <FaWhatsapp/>
    </a>
  )
}

export default WhatsApp