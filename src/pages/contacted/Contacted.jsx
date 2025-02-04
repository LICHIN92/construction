import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import './csss.css'
import { useNavigate } from 'react-router-dom'
const Contacted = () => {
    const hasFetched = useRef(false)
    const [data, getdata] = useState([])
    const [contacts, setContact] = useState('')
    const [Cp, setCP] = useState('')
    const navigate = useNavigate()
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            if (hasFetched.current) return; // Skip if already fetched
            hasFetched.current = true;
            const token=localStorage.getItem('token')
            try {
                // const getdata = await axios.get('http://localhost:3000/contract')
                const getdata = await axios.get(`${apiUrl}/contract`,{
                    headers:{
                        'Authorization':`Bearer ${token}`
                    }
                })

                setContact(getdata.data.counts)
                // console.log(getdata.data.counts);
            } catch (error) {
                console.log(error);

            }
        }
        fetchData()
    })
    const findWork = async (work) => {
       
        navigate('/contracted/works',{ replace: false,state:{work}})
    }
    return (
        <div className='contacted_container ms-1 flex flex-col gap-2'>
            <h3>Works</h3>
            <dvi>
                <div>
                    <span className='bg-blue-400 rounded-2xl p-2' onClick={() => navigate('/Workers')}>Contacted
                        <span className=' bg-white ms-1 px-1 rounded-3xl'>{contacts.Total}</span>
                    </span>
                </div>
            </dvi>
            <dvi className="flex flex-wrap gap-3 mt-2 contact_work">
                <span onClick={() => findWork('Carpentry')}>Carpentary
                    <small className='bg-white'>{contacts.Carpentry ? contacts.Carpentry : "0"}</small>
                </span>

                <span onClick={() => findWork('Plumbing')}>Plumbing
                    <small className='bg-white'>{contacts.Plumbing ? contacts.Plumbing : "0"}</small>
                </span>

                <span onClick={() => findWork('Cement Plastering')}>Cement Plastering
                    <small className='bg-white'>{contacts.Cement ? contacts.Cement : "0"}</small>
                </span>

                <span onClick={() => findWork('Putty Plastering')}>Putty Plastering
                    <small className='bg-white'>{contacts.Putty ? contacts.Putty : "0"}</small>
                </span>

                <span onClick={() => findWork('Electrical Wiring')}>Wiring
                    <small className='bg-white'>{contacts.Wiring ? contacts.Wiring : "0"}</small>
                </span>
                <span onClick={() => findWork('Tile')}>Tile
                    <small className='bg-white'>{contacts.Tile ? contacts.Tile : "0"}</small>
                </span>
                <span onClick={() => findWork('Paint')}>Paint
                    <small className='bg-white'>{contacts.Paint ? contacts.Paint : "0"}</small>
                </span>
            </dvi>
        </div>
    )
}

export default Contacted