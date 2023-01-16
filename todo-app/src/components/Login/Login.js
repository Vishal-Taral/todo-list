import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss';

const Login = () => {
  const [inputData, setInputData] = useState({
    email: '',
    password: ''
  });
  const [error , setError] = useState(false);

  useEffect(() => {
    let login = localStorage.getItem('systemLogin');
    if (login) {
      navigate('/')
    }
  }, []);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    setInputData(
      prev => ({
        ...prev,
        [name]: value
      })
    )
  }
  const login = () => {
    if(inputData.email !== 'vishaltaral09@gmail.com' || inputData.password !== '12345'){
      setError(true);
    }

    if (inputData.email === 'vishaltaral09@gmail.com' && inputData.password === '12345') {
      // localStorage.setItem('systemLogin', true)
      navigate('Home')
    }
  }

  return (
    <div>

      <div className="mains">
        {error ? <p style={{color : "red"}}>email or password is either invalid or empty</p> : ""}
        <div className="logins">
          <img className="profileImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4Ui8-aKNWj9bB8P5rLObzIRt30lQ-wpIOg&usqp=CAU" alt="" />
          <input className="inputBox" type="email" placeholder="Enter your Email id" onChange={changeHandler} name="email" value={inputData.email} />
          <input className="inputBox" type="password" placeholder="Enter your password" onChange={changeHandler} name="password" value={inputData.password} />
          <div className="Registration">
            <span>
              <p className='signup'>Sign Up</p>
            </span>
            <span>
              <p className='forgotPassword'> Forgot password ? </p>
            </span> <br />
          </div><br />
          <button onClick={login} className="login-btn btn btn-secodary">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login;