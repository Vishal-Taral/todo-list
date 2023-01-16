import React from 'react';
import './Navbar.scss';
import AddNewTask from '../AddNewTask/AddNewTask';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigationForLogout = useNavigate();
      const {getJsonData} = props;
  return (
    <div className='Navbar-component'>
      <div className='nav one'>
        <h6 className='login' onClick={() => navigationForLogout('/')}>Logout</h6>
      </div>
      <div className=' two'>
        <h4>My to-do list </h4>
        <AddNewTask getJsonData={getJsonData}/>
      </div>

    </div>
  )
}

export default Navbar