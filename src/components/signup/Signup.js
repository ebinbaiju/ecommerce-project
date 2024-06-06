import React, { useRef } from 'react';
import './signup.css';
import Navebar from '../navebar/Navebar';
import Footer from '../footer/Footer';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const phoneRef = useRef(null);
  const genderRef = useRef(null);
  const addressRef = useRef(null);

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!nameRef.current.value || !emailRef.current.value || !passwordRef.current.value || !confirmPasswordRef.current.value || !phoneRef.current.value || !genderRef.current.value || !addressRef.current.value) {
      setError('Fields are required');
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError('Passwords do not match');
      return;
    }

    // If all validation passes
    axios.post('http://localhost:8000/api/user/', {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      gender: genderRef.current.value,
      password: passwordRef.current.value,
      addressRef: addressRef.current.value
    })
    .then((res) => {
      navigate('/Signin');
    })
    .catch((err) => console.log(err));
  };

  return (
    <>
      <Navebar />
      <form id="form-validation" onSubmit={handleSubmit}>
        <div className="wrapper">
          <div className="title">Registration Form</div>
          <div className="form">
            <div className="inputfield">
              <label>Name</label>
              <input type="text" className="input" id="name" name='name' ref={nameRef} />
            </div>
            <div className="inputfield">
              <label>Password</label>
              <input type="password" className="input" id="password" name='password' ref={passwordRef} />
            </div>
            <div className="inputfield">
              <label>Confirm Password</label>
              <input type="password" className="input" id="confirmPassword" ref={confirmPasswordRef} />
            </div>
            <div className="inputfield">
              <label>Gender</label>
              <div className="custom_select">
                <input type="text" className="input" id="gender" name='gender' ref={genderRef} />
              </div>
            </div>
            <div className="inputfield">
              <label>Email Address</label>
              <input type="text" className="input" id="email" name='email' ref={emailRef} />
            </div>
            <div className="inputfield">
              <label>Phone</label>
              <input type="text" className="input" id="Phone" name='phone' ref={phoneRef} />
            </div>
            <div className="inputfield">
              <label>Address</label>
              <input type="text" className="input" id="address" name='address' ref={addressRef} />
            </div>
            <div>
              <p className='p'>Already Signed up? 
              <Link to="/Signin" className='a'>Signin</Link>
              </p>
            </div>
          </div>
          {error && <div id="error" className='error'>{error}</div>}
          <div className="inputfield">
            <input type="submit" defaultValue="Register" className="btn" />
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Signup;
