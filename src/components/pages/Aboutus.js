import React from 'react'
import './style.css';
import Navebar from '../navebar/Navebar';
import Footer from '../footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Aboutus() {
  return (
    <>
    <Navebar/>
    <div className="container">
    <div className="row  about-inner mt-3">
      <div className="col-lg-6 ">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block "
                src="./images\812KxAd9Z9L._AC_UF1000,1000_QL80_.jpg"
                alt="First slide"
                width="80%"
                
              />
            </div>
            
          </div>
        </div>
      </div>
      <div className="col-lg-6 back-img">
        <h1 className="mt-5 mb-4 text-info">About Us</h1>
        <div>
        Welcome to Max Laptops, your ultimate destination for cutting-edge laptops and technology solutions. 
        At Max Laptops, we're passionate about providing our customers with top-quality laptops that cater to every need and preference.
        At Max Laptops, customer satisfaction is our top priority. That's why we offer exceptional customer service, fast shipping, 
        and hassle-free returns, ensuring that your experience with us is nothing short of excellent.
        Join us on a journey of innovation and discovery as we strive to bring you the latest in laptop technology. 
        Explore our website today and find your perfect match at Max Laptops
        </div>
      </div>
    </div>
    <div className="row mt-5 mb-5">
      <div className="col-lg-6 back-img">
        <h1 className="mt-5 mb-4 text-info">Our Vision</h1>
        <div>
          "At Max Laptops, our vision is to empower individuals and businesses with the transformative potential of technology.
         We envision a world where everyone has access to cutting-edge laptops and innovative solutions that enhance productivity, 
         creativity, and connectivity.As we continue to grow and evolve, our vision remains steadfast: 
         to be the go-to destination for individuals and businesses seeking exceptional laptops and unparalleled expertise. 
         Together, let's embark on a journey of discovery and transformation with Max Laptops".
        </div>
      </div>
      <div className="col-lg-6">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block "
                src="./images\-original-imagtq7f4urd7f8z.webp"
                alt="First slide"
                width="76%"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-12 text-center text-info">
        <h1>social Media Post</h1>
        <div>Showcasing our most purchased product</div>
      </div>
    </div>
    <div className="row mt-5 text-center ">
      <div className="col-lg-12 d-flex">
        <div>
          <img src="./images/predator.jpg" width="70%" className="img" />
        </div>
        <div>
          <img src="./images/rog.jpg" width="70%" className="img" />
        </div>
        <div>
          <img src="./images/lenovo.png" width="70%" className="img" />
        </div>
        <div>
          <img src="./images/hpvitus.png" width="70%" className="img" />
        </div>
        <div>
          <img src="./images/hp-omen.jpg" width="70%" className="img" />
        </div>
      </div>
    </div>
  </div>
  <Footer/>
 </>

  )
}

export default Aboutus