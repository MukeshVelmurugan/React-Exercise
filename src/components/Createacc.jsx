import React from 'react';
import { useNavigate } from 'react-router-dom';
import './createacc.css';

const Createacc = () => {

  const navigate = useNavigate()
  return (
    <>
      <div className="layout1">
        <div className="frame1">
          <div className="cpage">
            <div className="title1">Create your<br />PopX account</div>

            <div className="label-float">
                <label>Full Name<span className="required-star">*</span></label>
                <input type="text" placeholder="Marry Doe" required />
              </div>

              <div className="label-float">
                <label>Phone number<span className="required-star">*</span></label>
                <input type="tel" placeholder="Marry Doe" required />
              </div>

              <div className="label-float">
                <label>Email address<span className="required-star">*</span></label>
                <input type="email" placeholder="Marry Doe" required />
              </div>

              <div className="label-float">
                <label>Password<span className="required-star">*</span></label>
                <input type="password" placeholder="Marry Doe" required />
              </div>

              <div className="label-float">
                <label>Company name</label>
                <input type="text" placeholder="Marry Doe" required />
              </div>
              <div className="radio-group">
                  <label className="radio-label">Are you an Agency?<span className="required-star">*</span></label>
                  <div className="radio-options">
                    <label>
                      <input type="radio" name="agency" value="yes" /> Yes
                    </label>
                    <label>
                      <input type="radio" name="agency" value="no" /> No
                    </label>
                  </div>
                </div>
          </div>

          <button className="submit-btn" onClick={() => navigate('/account')}>Create Account</button>
        </div>
      </div>
    </>
  );
};

export default Createacc;
