import React from 'react';
import './Navbar.scss';
import AddNewTask from '../AddNewTask/AddNewTask';

const Navbar = (props) => {

  return (
    <div className='Navbar-component'>
      <div className='nav one'>
        <h6 className='login'>Login</h6>
      </div>
      <div className='nav two'>
        <h4>My to-do list </h4>
        {/* <button className='save-btn'>Save This List</button> */}
        <AddNewTask />
      </div>

    </div>
  )
}

export default Navbar