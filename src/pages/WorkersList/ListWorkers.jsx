import React, { useEffect, useRef, useState } from 'react'
import './list.css'
import axios from 'axios'
import Modall from '../../Components/modal/Modall'
import Alertt from '../../Components/alert/Alertt'
const ListWorkers = () => {
    const [contacts, setContacts] = useState([])
    const [work, setWork] = useState('')
    const hasFetched = useRef(false)
    const [list, SetList] = useState([])
    const apiUrl = import.meta.env.VITE_API_URL;
    const [remover, setRemover] = useState(false)
    const [workerid, setId] = useState('')
    const [modal, setmodal] = useState(false)
    const [msg, setMsg] = useState('')
    const [refresh, setRefresh] = useState(false)

    const findWork = async (work) => {
        setWork(work)
        try {
            // const wokers = await axios.get(`http://localhost:3000/workersjob/${work}`)
            const wokers = await axios.get(`${apiUrl}/workersjob/${work}`)

            SetList(wokers.data)
            // console.log(wokers.data);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        const getNumber = async () => {
            // if (hasFetched.current) return
            // hasFetched.current = true
            try {
                // const data = await axios.get('http://localhost:3000/workers')
                const data = await axios.get(`${apiUrl}/workers`)

                setContacts(data.data.jobCounts)
                // console.log(data.data);
                // hasFetched.current=true

            } catch (error) {

            }
        }
        getNumber()
    }, [refresh,modal])

    const deleteWorker = async (id) => {
        try {
            const response = await axios.delete(`${apiUrl}/worker/${id}`)
            console.log(response);
            setMsg(response.data)
            setRefresh(prev => !prev); // refreshes the counts

            setmodal(true)
            setTimeout(() => {
                setmodal(false)
            findWork(work); // refreshes the displayed list
            }, 2500)
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className='ListWorkers'>
            {remover &&
                <Modall setRemover={setRemover} title={'Delete Confirmation'} setDelete={setRemover}
                    Deletemsg={deleteWorker}
                    msg={'Do you want to remove this worker ?'} id={workerid} />
            }
            {modal && <Alertt message={msg} err={true} heading={'Message from DataBase'} />}
            <h4 className='ms-1 font-bold'>Workers List</h4>

            <dvi className="flex flex-wrap gap-3 mt-2 ps-2 contact_work">
                <span onClick={() => findWork('Carpenter')}>Carpenter
                    <small className='bg-white'>{contacts.Carpenter ? contacts.Carpenter : "0"}</small>
                </span>

                <span onClick={() => findWork('Plumber')}>Plumbing
                    <small className='bg-white'>{contacts.Plumber ? contacts.Plumber : "0"}</small>
                </span>

                <span onClick={() => findWork('Cement Plaster')}>Cement Plaster
                    <small className='bg-white'>{contacts.Cement ? contacts.Cement : "0"}</small>
                </span>

                <span onClick={() => findWork('Putty Plaster')}>Putty Plaster
                    <small className='bg-white'>{contacts.Putty ? contacts.Putty : "0"}</small>
                </span>

                <span onClick={() => findWork('Electrician')}>Electricain
                    <small className='bg-white'>{contacts.Electrician > 0 ? contacts.Electrician  : "0"}</small>
                </span>
                <span onClick={() => findWork('Tiler')}>Tile
                    <small className='bg-white'>{contacts.Tile ? contacts.Tile : "0"}</small>
                </span>
                <span onClick={() => findWork('Paint')} className='bg-amber-950'>Painter
                    <small className='bg-white'>{contacts.Paint ? contacts.Paint : "0"}</small>
                </span>
                <span onClick={() => findWork('Marble')} className='bg-rose-900'>Marble
                    <small className='bg-white'>{contacts.Marble ? contacts.Marble : "0"}</small>
                </span>
            </dvi>
            {work ?
                <div className='pt-3 ps-2'>
                    <span className='capitalize bg-slate-600 p-1 text-xl text-amber-500 px-3 rounded-full'>{work + "s"}</span>
                    {
                        list.length > 0 ? <table>
                            <thead>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>Name</th>
                                    <th>Mobile</th>
                                    <th>Place</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {list.map((worker, index) =>
                                    <tr key={index}> 
                                        <td className='w-1'>{index + 1}</td>
                                        <td>{worker.FullName}</td>
                                        <td>{worker.Mobile}</td>
                                        <td>{worker.Place}</td>
                                        <td>
                                            <span className=' bg-white px-1 text-gray-700 cursor-pointer'
                                                onClick={() => { setRemover(true), setId(worker._id) }}>
                                                Remove
                                            </span>
                                        </td>

                                    </tr>
                                )}

                            </tbody>
                        </table> : "no workers"
                    }
                </div> :
                null}


        </div>
    )
}

export default ListWorkers