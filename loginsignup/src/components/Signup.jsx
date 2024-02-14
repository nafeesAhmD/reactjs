import React from 'react'
import './Signup.css'
import personIcon from '../assets/person.png'
import emailIcon from '../assets/email.png'
import passwordIcon from '../assets/password.png'
import Swal from 'sweetalert2'

function Signup() {

    const handleClick = () => {
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Sign Up Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }
  return (
    <div className='container'>
        <div className='header'>
            <h1>Sign Up</h1>
            <div className='underline'></div>
      
       <div className='inputs'>
        <div className='input'>
            <input type="text" placeholder='Name' required/>
            <img src={personIcon} alt="" />
        </div>
       </div>
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
        <div className='signup' onClick={handleClick}>Sign Up</div>
        
       </div>
       </div>
    </div>
  )
}

export default Signup
