import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
const Login = () => {

    const navigate = useNavigate()
  return (
    <>
        <div className='layout2'>
            <div className='frame2'>
              <div className='lpage'>
                <div className='title2'>Signin to your<br></br>PopX account</div>
                <div className='loremsign'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            
                <div className="label-float">
                <label>Full Name<span className="required-star">*</span></label>
                <input type="text" placeholder="Full Name" required />
              </div>

              <div className="label-float">
                <label>Phone number<span className="required-star">*</span></label>
                <input type="tel" placeholder="Phone number" required />
              </div>


                  </div>
                  <button className="btn" onClick={() => navigate('/account')}>Login</button>
            </div>
            
        </div>
    </>
    
  )
}

export default Login