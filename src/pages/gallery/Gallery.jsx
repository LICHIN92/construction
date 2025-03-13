import React, { useState, useEffect } from "react";
import "./gallery.css";
import AddImage from "../../Components/addImage/AddImage";
import axios from "axios";
import $ from "jquery";
import close from '../../assets/img/close.svg'
import { useSelector } from "react-redux";
import Modall from "../../Components/modal/Modall";
import { MdLocationOn } from "react-icons/md";
import Details from "../../Components/Details/Details";
const Gallery = () => {
  const [openImage, setImageOpen] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const [pics, setPics] = useState([]);
  const token = localStorage.getItem('token')
  const [refresh, seteRfresh] = useState(false)
  const { user } = useSelector(state => state.user?.user)
  const [modal, setModal] = useState(false)
  const [id, setId] = useState()
  const [details,setDetails]=useState(false)
  const [selectedDetails, setSelectedDetails] = useState(null);
  // console.log(user);

  useEffect(() => {
    const getpics = async () => {
      try {
        const getpic = await axios.get(`${apiUrl}/getpic`);
        setPics(getpic.data);
        // console.log(getpic.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    getpics();
  }, [apiUrl, refresh, openImage]);

  useEffect(() => {
    $('img').hover(function () {
      $('img').css('border-radius', '10px')
      // $('img').css('border-radius', '10px')
      $(this).siblings(".overlay").css("visibility", "visible");

    },
      function () {
        // $(this).css("border-radius", "0px"); // Reset on hover out
        $(this).siblings(".overlay").css("visibility", "hidden");
      }

    )
  }, [])
  const deleteImg = async (id) => {
    // alert(id)
    try {
      const deletePic = await axios.delete(`${apiUrl}/delete/${id}`
        , {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      )
      seteRfresh(!refresh)
    } catch (error) {

    }
  }
  return (

    <div className="galleryContainer">
      {openImage && user?.Admin && <AddImage setImageOpen={setImageOpen} />}
      {modal &&
        <Modall setDelete={setModal} title={'Delete Confirmation!'} Deletemsg={deleteImg} id={id} msg={'Do you want to delete this image ?'} />
      }

   {details && <Details close={setDetails} detail={selectedDetails}/>}  

      <div className="galleryHead">
        <h3> Completed Works</h3>
        {token && <span className="cursor-pointer hover:text-green-800" onClick={() => setImageOpen(true)}>Add Images</span>}
      </div>
      <div className="gallery">
        {pics.map((file, index) => (
          <div className="relative" key={index}>
            <img
              className="workimg"
              src={file.pics[0] || "https://via.placeholder.com/150"}
              alt={`Client ${index}`}
              onClick={()=>{setSelectedDetails(file), setDetails(true)}}
            />
            <div className="overlay ">
              <span className="">
                <MdLocationOn className="fill-red-500" />

                {file.place}</span>
            </div>
            <span className="text-white vv"> {file.work}</span>
            {token &&
              <img className="closeq" src={close} alt="" onClick={() =>
              //  { deleteImg(file._id) }
              {
                setId(file._id)
                setModal(true)
              }
              } />
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
