import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './login.css'
import axios from 'axios'
import Alertt from '../../Components/alert/Alertt'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
    const LoginSchema = yup.object({
        UserName: yup.string().required(),
        Password: yup.string().required('Enter your Password')
    })
    const token = localStorage.getItem('token')
    const { user } = useSelector(state => state.user.user)

    console.log(user);

    const SignupSchema = yup.object({
        FullName: yup.string().matches(/^[a-z. ]+$/i, "Full Name is required").required(),
        Mobile: yup.string().matches(/^[0-9]{10}$/, 'Mobile is required'),
        Place: yup.string().required(),
        Job: yup.string().required(),
        SetPassword: yup.string().matches(/^[a-z0-9]{8}$/i, 'No spacial Charecters').required(),
        ConfirmPassword: yup.string().oneOf([yup.ref("SetPassword"), null], "Passwords must match").required("Confirm Password is required"),

    })
    const [login, setLogin] = useState(false)
    const [succes, setSuccess] = useState(false)
    const [err, setErr] = useState(false)
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(login ? SignupSchema : LoginSchema) })

    const showMsg = () => {
        setErr(true)
        // setMsg(error.response.data)
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            setErr(false)
        }, 3000)
    }

    const LoginSubmit = async (dataa) => {
        console.log(dataa);
        try {
            const res = await axios.post('https://constructionbe.onrender.com/login', dataa)
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)

            navigate('/Workers')
        } catch (error) {
            console.log(error)
            setMsg(error.response.data)
            showMsg()
        }

    }

    const SignupSubmit = async (data) => {
        console.log(data)
        try {
            const res = await axios.post('https://constructionbe.onrender.com/signup', data)
            setSuccess(true)
            console.log(res.data);
            setMsg(res.data)

            setTimeout(() => {
                setSuccess(false)
                setLogin((prev) => !prev);
                reset(); // Clear the form data and validation
            }, 3500)
        } catch (error) {
            console.log(error.response.data);
            setMsg(error.response.data)
            showMsg()

        }
    }
    return (
        <div className='loginContainer'>
            {succes && <Alertt message={msg} heading={err ? "error" : 'Successfully Created!'} err={err} />}
            <h4>Workers Login Page</h4>
            {!token && !user?.Admin ?
                <form onSubmit={handleSubmit(LoginSubmit)}>
                    <div className='dBox'>
                        <input {...register('UserName')} type="text" />
                        <label htmlFor="">User Name</label>
                        {errors.UserName && <small>{errors.UserName.message}</small>}
                    </div>
                    <div className='dBox'>
                        <input type="password" {...register('Password')} />
                        <label htmlFor="">Password</label>
                        {errors.Password && <small>{errors.Password.message}</small>}

                    </div>
                    <div className='dBox'>
                        <input type="submit" value={'Log in'} className='bg-green-600 text-white' />
                       {/* {token && user?.Admin &&
                            <p className="text-blue-600 text-center cursor-default" onClick={() => setLogin(true)}>create account</p>
                        }*/}
                    </div>

                </form>
                :
                <>
                    <form onSubmit={handleSubmit(SignupSubmit)}>
                        <div className="dBox">
                            <input type="text" {...register('FullName')} />
                            <label htmlFor="">Full Name</label>
                            {errors.FullName && <small>{errors.FullName.message}</small>}
                        </div>
                        <div className="dBox">
                            <input type="number" {...register('Mobile')} />
                            <label htmlFor="">Mobile</label>
                            {errors.Mobile && <small>{errors.Mobile.message}</small>}
                        </div>
                        <div className="dBox">
                            <input type="text" {...register('Place')} />
                            <label htmlFor="">Place</label>
                            {errors.Place && <small>{errors.Place.message}</small>}
                        </div>
                        <div className="jobBox ">
                            <select defaultValue="" className='yourJob' {...register('Job')}>
                                <option value="" disabled hidden>- - -</option>
                                <option value="Carpenter">Carpenter</option>
                                <option value="Electrician">Electrician</option>
                                <option value="Plumber">Plumber</option>
                                <option value="Cement Plaster">Cement Plaster</option>
                                <option value="Putty Plaster">Putty Plaster</option>
                                <option value="Tiler">Tile</option>
                            </select>
                            <label htmlFor="">Your Job</label>
                            {errors.Job && <small>{errors.Job.message}</small>}
                        </div>
                        <div className="dBox">
                            <input type="password" {...register('SetPassword')} />
                            <label htmlFor="">Create password</label>
                            {errors.SetPassword && <small>{errors.SetPassword.message}</small>}
                        </div>
                        <div className="dBox">
                            <input type="password" {...register('ConfirmPassword')} />
                            <label htmlFor="">Confirm Passowrd</label>
                            {errors.ConfirmPassword && <small>{errors.ConfirmPassword.message}</small>}
                        </div>
                        <div className="dBox">
                            <input type="submit" value={'Submit'} className='bg-green-700 text-white' />
                        </div>
                        {/* {token && user?.Admin &&  <div className="dBox">
                            <p onClick={() => setLogin(false)} className='cursor-default text-blue-800 text-center text-sm'> Click for Login</p>

                        </div>} */}
                    </form>

                </>
            }
        </div>
    )
}

export default Login