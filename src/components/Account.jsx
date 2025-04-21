import React from 'react'
import './account.css'
import img from '../assets/img.png'
const Account = () => {
  return (
    <>
        <div className='layout3'>
            <div className='frame3'>
              <div className='apage'>
              <div className='as'>Account Settings</div>
              <div className='full'>
              <img src={img} alt="image" className='img'/>
                <div className='imgandname'>
                    <div style={{fontSize: "15px", fontWeight: "bold"}}>Marry Doe</div>
                    <div style={{fontSize: "15px"}}>Marry@Gmail.Com</div>
                </div>
                </div> 
                <div className='lorem1'>Lorem ipsum dolor sit amt consec tetur adipi sicing elit. orem ipsum dolor orem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                

                  </div>
            </div>
            
        </div>
    </>
    
  )
}

export default Account