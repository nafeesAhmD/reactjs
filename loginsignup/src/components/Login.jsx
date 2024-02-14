import React from 'react'
import emailIcon from '../assets/email.png'
import passwordIcon from '../assets/password.png'
import googleIcon from '../assets/google logo.png'
import './Signup.css'
import Swal from 'sweetalert2'


function Login() {
    
    const loginBtnClick = () => {
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
  return (
    <div className='container'>
       <div className='header'>
            <h1>Login</h1>
            <div className='underline'></div>
      
      
       <div className='inputs'>
        <div className='input'>
            <input type="Email" placeholder='Email' required/>
            <img src={emailIcon} alt="" />
        </div>
       </div>
       <div className='inputs'>
        <div className='input'>
            <input type="password" placeholder='Password' required/>
            <img src={passwordIcon} alt="" />
        </div>
       </div>
       <div className='submit-container'>
        <div className='signup' onClick={loginBtnClick}>Login</div>
       </div>
       <div className='signinGoogle'>
        <img src={googleIcon} alt="" />
        <div className='googleText'>Continue With Google</div>
       </div>
       <div className='text-box'>
        <div className='text-account'>Don't have an account?</div>
       </div>
       </div>
    </div>
  )
}

export default Login
