import React from 'react';
import './Navbar.scss';
import AddNewTask from '../AddNewTask/AddNewTask';

const Navbar = (props) => {
      const {getJsonData} = props;
  return (
    <div className='Navbar-component'>
      <div className='nav one'>
        <h6 className='login'>Login</h6>
      </div>
      <div className=' two'>
        <h4>My to-do list </h4>
        <AddNewTask getJsonData={getJsonData}/>
      </div>

    </div>
  )
}

export default Navbar