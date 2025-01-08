import React, { useEffect, useState } from 'react'
import './Contact.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
const navigate=useNavigate()
    const schema = yup.object({
        Name: yup.string().matches(/^[a-z.]+/i,'Please enter your Name'),
        Mobile: yup.string().required('Enter Mobile NUmber').matches(/^[0-9]{10}$/,'Mobile number must be exactly 10 digits'),
        Place: yup.string().required('Please  enter your Place'),
        Msg: yup.string().required('Enter your message')
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const [success, setSuccess] = useState(false); // Track submission success
    const onsubmit = async (data) => {
        console.log(data);
        try {
            const res = await axios.post('https://constructionbe.onrender.com', data)
            console.log(res);
            alert(res.data+'\nThank you')
            setSuccess(true)
            navigate('/')
        } catch (error) {
            console.log(error);

        }
    }
   
     
    return (
        <div className='contact'>
            <div className='formdiv'>

                <h2>CONTACT US</h2>
                <form onSubmit={handleSubmit(onsubmit)}>
                    <div className='labelinput'>
                        <input type="text" {...register("Name")} placeholder='YOUR NAME' />
                        {errors.Name && <small>{errors.Name.message}</small>}
                    </div>
                    <div className='labelinput'>
                        <input type="number" {...register('Mobile')} placeholder='YOUR MOBILE' />
                        {errors.Mobile && <small>{errors.Mobile.message}</small>}

                    </div>
                    <div className='labelinput'>
                        <input type="text" {...register("Place")} placeholder='YOUR PLACE' />
                        {errors.Place && <small>{errors.Place.message}</small>}

                    </div>
                    <div className='labelinput'>
                        <textarea  {...register("Msg")} placeholder='MESSAGE' />
                        {errors.Msg && <small>{errors.Msg.message}</small>}

                    </div>
                    <div className='buttondiv'>
                        <button type='submit'>SEND MESSAGE</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact