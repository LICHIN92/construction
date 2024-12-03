import React, { useState } from 'react'
import './Contact.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import {
    Alert,
    // AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

const Contact = () => {
    const schema = yup.object({
        Name: yup.string().matches(/^[a-z.]+/i),
        Mobile: yup.string().required('Enter Mobile NUmber').matches(/^[0-9]{10}$/),
        Place: yup.string().required('please  enter your Place'),
        Msg: yup.string().required('enter your message')
    })
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const [success, setSuccess] = useState(false); // Track submission success
    const [error, setError] = useState(''); // Track errors
    const onsubmit = async (data) => {
        console.log(data);
        try {
            const res = await axios.post('http://localhost:3000', data)
            console.log(res);
            setSuccess(true)
            {success && (
                <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                >
                    {/* <AlertIcon boxSize='40px' mr={0} /> */}
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Application submitted!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Thanks for submitting your application. Our team will get back to you soon.
                    </AlertDescription>
                </Alert>
            )}


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
                    <button type='submit'>Send MESSAGE</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact