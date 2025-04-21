import React from 'react'
import { useNavigate } from 'react-router-dom'
import './landingpage.css'

const Landingpage = () => {
  const navigate = useNavigate()

  return (
    <div className='layout'>
      <div className='frame'>
        <div className='first'>
          <div className='title'>Welcome to PopX</div>
          <div className='lorem'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <button className='btn1' onClick={() => navigate('/create')}>Create Account</button>
          <button className='btn2' onClick={() => navigate('/login')}>Already Registered? Login</button>
        </div>
      </div>
    </div>
  )
}

export default Landingpage
