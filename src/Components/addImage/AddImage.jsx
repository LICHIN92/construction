import React, { useRef, useState } from 'react'
import './addimage.css'
import addimage from '../../assets/img/addImage.svg'
import close from '../../assets/img/close.svg'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import Alertt from '../alert/Alertt.jsx'
// import QRCode from 'qrcode.react'
import QRCode from "react-qr-code";

const AddImage = ({ setImageOpen }) => {
    const fileInputRef = useRef()
    const MAX_FILES = 5;
    const [selectedFile, setSelectedFile] = useState([])
    const schema = yup.object({
        work: yup.string().required(),
        place: yup.string().required(),
        details:yup.string().optional()
    })
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token')
    const { handleSubmit, register, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const handlefile = (e) => {
        e.preventDefault()
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    const handleChange = (e) => {
        console.log(e.target.files);
        const filesArray = Array.from(e.target.files); // Convert FileList to an array
        if (selectedFile.length + filesArray.length > MAX_FILES) {
            alert(`You can only upload up to ${MAX_FILES} images.`);
            return;
        }
        setSelectedFile((prev) => [...prev, ...filesArray]); // Correctly update state

    };

    const [alerts, setAlert] = useState(false)
    const [wait, setWait] = useState(false)

    const [message, setMessage] = useState(null)
    const submit = async (data) => {
        console.log(data);
        
        if (selectedFile.length === 0) {
            alert('Please select an image');
            return;
        }

        const formData = new FormData();
        formData.append('work', data.work);
        formData.append('place', data.place);
        formData.append('details', data.details || "");

        selectedFile.forEach((file) => {
            formData.append('pic', file); // Append each file
        });

        try {
            // console.log(formData);
            setWait(true)
            const res = await axios.post(`${apiUrl}/addpics`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            // console.log(res.data);

            setMessage(res.data.message)
            setAlert(true)
            setWait(false)

            setTimeout(() => {
                setAlert(false)
                setImageOpen(false)
            }, 2500)
        } catch (error) {
            console.error('Upload failed', error);
            setWait(false)
        }
    };

    const remover = (index) => {
        setSelectedFile((prev) => prev.filter((_, i) => i !== index));
    };
    const weburl = "https://construction-eosin.vercel.app/contact"
    return (
        <div className='uploadImage'>
            {alerts && <Alertt message={message} err={false} heading={'Success !'} />}
            {/* <div className=' flex flex-col z-50'>
                <h6 className='text-center'>Scan this QR Code</h6>
                <QRCode value={weburl} size={200} />
            </div> */}
            <div className='imageForm '>

                <img className='formClose' onClick={() => setImageOpen(false)} src={close} alt="" />

                <form onSubmit={handleSubmit(submit)} className='flex flex-col justify-center items-center gap-3'>
                    <h2 className='mt-4'>Add Completed Work</h2>

                    <div className='flex gap-2'>
                        <input type="file" className='hidden' accept='image/*' max={MAX_FILES} multiple onChange={handleChange} ref={fileInputRef} />

                        {selectedFile?.length > 0 && <div className='flex flex-wrap gap-3'>

                            {selectedFile.map((file, index) => (
                                <div className='relative flex flex-col justify-center flex-wrap'>
                                    <img className='selected' key={index} src={URL.createObjectURL(file)} alt={`preview-${index}`} />
                                    <img className='closee' src={close} alt="" onClick={() => { remover(index) }} />
                                </div>
                            ))}
                        </div>}
                        <img className='w-10' src={addimage} alt="" onClick={handlefile} />

                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="work" className='bg-none'>Work</label>
                        <input type="text" id="work" {...register('work')} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Place</label>
                        <input type="text" {...register('place')} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="dd">Details</label>
                        <textarea name="" id="dd" {...register('details')} cols='20' rows="10"></textarea>
                    </div>
                    <button className='p-1 w-auto  h-9 text-clip'>{wait ? 'uploading...' : 'upload'}</button>
                </form>


            </div>

        </div>
    )
}

export default AddImage