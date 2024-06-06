import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function footer() {
  return (
    <>
    <div className="container-fluid color">
    <div className="row ">
      <div className="footer-left col-lg-4">
        <div>STAY CONNECTED</div>
        <div className="footer-img">
          <img src="./images\facebook.png" alt="facefook" className='img1' />Facebook
          <img src="./images/twitter.png" alt="twitter" className='img1' />twitter
          <img src="./images/pinterest.png" alt="pinterest" className='img1'/>pinterest
          <img src="./images/instagram.png" alt="instagram" className='img1'/>instagram
        </div>
      </div>
      <div className="footer-center col-lg-4 ">
        <div>BE OUR FRIEND</div>
        <div>
          <input
            type="text"
            placeholder="Enter your email here*"
            className="email-box"
          />
        </div>
        <div>
          <button type="submit" className="submit-box">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="footer-right col-lg-4">
        <div>NEED ASSISTANCE?</div>
        <div>123-456-7890</div>
        <div>info@mysite.com</div>
      </div>
    </div>
    <div className="footer-down">
      <p>© 2035 by PRETTY GAL. Powered and secured by Wix</p>
    </div>
  </div>
    </>
  )
}

export default footer