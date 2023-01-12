import React from 'react';
import './Modal.scss';

const Modal = ({ closeModal }) => {
    return (
        
        <div className='modal-background'>
            <div className='modalContainer mt-3'>
                <div className='title '>
                    <h5>Are you sure wanted to delete</h5>
                </div>

                <div className='footer mt-3'>
                    <button onClick={() => closeModal(false)}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal