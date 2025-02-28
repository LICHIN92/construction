import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './workpage.css'
const WorkPage = () => {
    const location = useLocation()
    const { data: initialData } = location.state || {}; // Safely accessing the state object
    const [data, setData] = useState([])
    // console.log(location.state);
    const work = location.state.work
    const hasFetched = useRef(false)
    const [refresh, setRefresh] = useState(false)
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const workss = async () => {
            if (hasFetched.current) return; // Skip if already fetched
            hasFetched.current = true;
            try {
                // const works = await axios.get(`http://localhost:3000/work/${work}`)
                const works = await axios.get(`${apiUrl}/work/${work}`)

                // console.log(works.data)
                setData(works.data.data)
            } catch (error) {
                console.log(error);

            }
        }
        workss()
    }, [refresh, work])
    const contractUpdate = async (id) => {
        try {
            const update = await axios.patch(`${apiUrl}/contract/${id}`)
            hasFetched.current = false
            setRefresh(!refresh)
        } catch (error) {
            console.log(error);

        }
    }
    const conpleteUpdate = async (id) => {

        try {
            // const update = await axios.patch(`https://constructionbe.onrender.com/complete/${id}`)
            const update = await axios.patch(`${apiUrl}/complete/${id}`)

            hasFetched.current = false
            setRefresh(!refresh)
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className='workPage '>
            <h4 className='ms-1 mt-1 text-orange-400 fw-bolde font-bold'>{work}</h4>
            <table>
                <thead>
                    <th className='w-1'>sl.no</th>
                    <th>Customer</th>
                    <th>Mobile</th>
                    <th>Place</th>
                    <th>Contracted</th>
                    <th>Completed</th>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.Name || 'N/A'} </td>
                                <td>{item.Mobile}</td>
                                <td>{item.Place || 'N/A'}</td>
                                <td className='text-white'>
                                    <span onClick={() => { contractUpdate(item._id) }} className={item.Contracted ? "yes" : "no"}>{item.Contracted ? "Yes" : "No"}</span>
                                </td>
                                <td className='text-white'>
                                    <span
                                        onClick={() => { conpleteUpdate(item._id) }}
                                        className={item.Completed ? "yes" : "no"}
                                    >
                                        {item.Completed ? "Yes" : "No"}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default WorkPage