import React from 'react'

const Modal = ({closeModal}) => {
  return (
    <div className='modalbackground' tabIndex="-1" aria-labelledby="exampleModalLabel" >
        <div className='modalContainer'>
            <button onClick={() => closeModal(false)}>X</button>
            <div className='title'>
                <p>please update item</p>
            </div>
            <hr />
            
            <div className='body'>
                <input type="text" />
            </div>
            <hr />
            <div className='footer'>
                <button onClick={() => closeModal(false)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Modal