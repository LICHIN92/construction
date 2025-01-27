import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './work.css'
import { useDispatch, useSelector } from 'react-redux';
import { CiLogout } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { clearUserData } from '../../redux/userSlice';


const Workers = () => {
  const [msg, setMsg] = useState([]);
  const hasFetched = useRef(false); // Track if the API call has been made
  const [refresh, setRefresh] = useState(false)
  const { user } = useSelector(state => state.user?.user)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  console.log(user?.Admin);
  const [values, setValues] = useState('0')
  const dispatch=useDispatch()
  const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
      const fetchData = async () => {
        if (hasFetched.current) return; // Skip if already fetched
        hasFetched.current = true;

        try {
          // const getMsg = await axios.get('http://localhost:3000');
          const getMsg = await axios.get(`${apiUrl}`);

          setMsg(getMsg.data.data);
          // console.log(getMsg.data.data);
        } catch (error) {
          // console.error(error);
        }
      };

      fetchData();
    }, [refresh]);

  const updateContact = async (id) => {
    console.log(id);

    try {
      // const updates = await axios.patch(`http://localhost:3000/${id}`)
      const updates = await axios.patch(`${apiUrl}/${id}`)

      // console.log(updates);
      hasFetched.current = false;

      setRefresh((prev) => !prev)

    } catch (error) {
      console.log(error);

    }
  }
  const DeleteMsg = async (id) => {
    console.log(id);

    try {
      // const deleteMessage = await axios.delete(`http://localhost:3000/${id}`)
      const deleteMessage = await axios.delete(`${apiUrl}/${id}`)

      console.log(deleteMessage.data);
      hasFetched.current = false;

      setRefresh((prev) => !prev)
    } catch (error) {
      console.log(error);

    }
  }
  const logOut = async () => {
    localStorage.removeItem('token')
    dispatch(clearUserData());
    navigate('/login')
    hasFetched.current = false;

    setRefresh((prev) => !prev)
  }
  return (
    <div className="workers_container">
      <div className='flex  justify-between align-items-center  sm:fs-2 md:px-2'>
        <div className='flex flex-col-reverse gap-1 w-35 pt-1  m:justify-around'>
          {user?.Admin && <span className=' text-green-200 cursor-default px-1 rounded-full ms-1 bg-gray-500' onClick={() => setValues('1')}>Contact</span>}
          {user?.Admin && <span className=' text-green-600 cursor-default px-1 rounded-full ms-1 bg-gray-600' onClick={() => {navigate('/WorkersList'),setValues('')}}>Workers</span>}

          <span className=' text-blue-600  ms-1 bg-gray-800 px-1 cursor-default rounded-full' onClick={() => navigate('/contracted')}>Contracted</span>

        </div>
        {/* {token && <span className='flex align-items-center text-red-400 text-sm cursor-pointer' onClick={() => (logOut())}>
          <CiLogout /> W
        </span>} */}
      </div>

      {msg.length > 0 ? (
        (values == '1' && <table>
          <thead>
            <tr>
              <th className="table_sl">Sl. No</th>
              <th className="table_contact">Contact</th>
              <th>Message</th>
              <th className="table_work">Work</th>
              <th className="table_contacted">Contacted</th>
            </tr>
          </thead>

          {user?.Admin ?
            <tbody>
              {msg.map((data, index) => (
                <tr key={data._id}>
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <span>{data.Name}</span> <br />
                    <span>{data.Mobile}</span> <br />
                    <span>{data.Place}</span>
                  </td>
                  <td>
                    <span>{data.Message}</span>
                  </td>
                  <td>
                    <span>{data.Work}</span>
                  </td>
                  <td className='flex flex-col  px-2 pt-1 text-center gap-2 justify-center align-items-center'>
                    <span
                      onClick={() => {
                        updateContact(data._id);
                      }}
                      className={data.Connect ? 'contact-Yes' : 'contacted-no'}
                    >
                      {data.Connect ? 'Yes' : 'No'}
                    </span>
                    {data.Connect ?
                      <span className='bg-red-600 text-white text-center  ms-2 p-0 '
                        onClick={() => { DeleteMsg(data._id) }}
                      >
                        Delete
                      </span>
                      : null}

                  </td>
                </tr>
              ))}
            </tbody>

            : "false"}
        </table>
        )
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Workers;
