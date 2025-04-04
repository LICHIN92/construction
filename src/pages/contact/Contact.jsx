import React, { useEffect, useState } from 'react'
import './Contact.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alertt from '../../Components/alert/Alertt'
import { CiMobile1 } from 'react-icons/ci'
import { MdOutlineMailOutline } from "react-icons/md";
import WhatsApp from '../../Components/whatsApp/WhatsApp'

const Contact = () => {
    const navigate = useNavigate()
    const schema = yup.object({
        Name: yup.string().matches(/^[a-z.]+/i, 'Please enter your Name'),
        Mobile: yup.string().required('Enter Mobile NUmber').matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits'),
        Place: yup.string().required('Please  enter your Place'),
        Msg: yup.string().required('Enter your message'),
        Work: yup.string().required('Please select a type of work')
    })
    const apiUrl = import.meta.env.VITE_API_URL;

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const [success, setSuccess] = useState(false); // Track submission success
    const [message, setMessage] = useState('')
    const onsubmit = async (data) => {
        // console.log(data);
        try {
            // const res = await axios.post('http://localhost:3000', data)
            const res = await axios.post(`${apiUrl}`, data)

            // console.log(res);
            // alert(res.data + '\nThank you')
            setMessage(res.data)
            setSuccess(true)
            setTimeout(() => {
                navigate('/')
            }, 3500)
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className='contact'>
            <div className='enquiries'>
                {/* <span className='text-white'>Enquiry</span> */}
                <span className='flex items-center gap-1'> <CiMobile1 className='' /> <span>+918086200861</span></span>
                <span className='flex items-center gap-1' onClick={()=>window.location.href='mailto:lccinfoconstruct@gmail.com'}><MdOutlineMailOutline /> lccinfoconstruct@gmail.com</span>
            </div>
            {
                success &&
                <Alertt message={message} heading={'thank you for message'} />

            }
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
                    <div className="labelinput">
                        <select {...register("Work")} defaultValue="">
                            <option value="">Select Work</option>
                            <option value="Carpentry">Carpentry</option>
                            <option value="Cement Plastering">Cement Plastering</option>
                            <option value="Electrical Wiring">Electrical Wiring</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Putty Plastering">Putty Plastering</option>
                            <option value="Tile">Tile Flooring</option>
                            <option value="Paint">Paint Work</option>

                        </select>
                        {errors.Work && <small>{errors.Work.message}</small>}

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
            <WhatsApp/>
        </div>
    )
}

export default Contact