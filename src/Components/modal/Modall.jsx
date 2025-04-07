import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import './modal.css'
const Modall = ({Deletemsg,title,msg,setDelete,id}) => {
    return (
        <div className='z-10  w-100 top-0 mdConatiner '>
            <div
                className="modal show "
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog className=' dial' >
                    <Modal.Header className='text-red-600'>
                        <Modal.Title > {title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{msg}</p>
                    </Modal.Body>

                    <Modal.Footer className='flex' >
                        <Button variant="primary" className='w-40' onClick={()=>setDelete(false)}>Cancel</Button>
                        <Button variant="danger" className='w-40' onClick={()=>{Deletemsg(id),setDelete(false)}}>Delete</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default Modall