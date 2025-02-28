import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
const Modall = ({Deletemsg,title,msg,setDelete,id}) => {
    return (
        <div className='z-100 position-absolute w-100'>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title> {title}</Modal.Title>
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