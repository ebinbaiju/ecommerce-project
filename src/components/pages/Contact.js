import React from 'react';
import Navebar from '../navebar/Navebar';
import Footer from '../footer/Footer';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <>
      <Navebar />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <img
              src="./images/-original-imagt65rf82gmffw.webp"
              width="100%"
              className="rounded"
              alt="Contact"
            />
          </div>
          <div className="col-lg-6">
            <div className="ml-5">
              <h1>Contact Us</h1>
              <div className="text-success">
                Have questions or need assistance? Contact us today! Our dedicated team at Max Laptop's is here to help with any inquiries, technical support, or product guidance you may need.
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input mt-3 mb-4"
                  />
                </div>
                <div className="col-lg-12">
                  <select className="text-muted">
                    <option>Choose Topic</option>
                    <option>Return policy</option>
                    <option value="">Delivery Time</option>
                    <option value="">Product Details</option>
                    <option value="">Service</option>
                    <option>Payment Options</option>
                  </select>
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input mt-3 mb-4"
                  />
                </div>
                <div className="col-lg-12">
                  <input type="text" placeholder="Message" className="input" />
                </div>
                <div className="col-lg-12 mt-3">
                  <button className="btn btn-secondary badge-pill">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card contact-card mt-5">
          <div className="row mt-5">
            <div className="col-lg-12">
              <h1 className="text-center text-danger">Featured Products</h1>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <img src="./images/Razer-Blade-15-Advanced-2.jpg" width="72%" className="img rounded" alt="Razer Blade" />
                <div className="mt-3">RAZER BLADE</div>
              </div>
              <div className="col-lg-4">
                <img src="./images/Acer-Nitro-V-15-Laptop-.webp" width="85%" className="img rounded" alt="Acer Nitro" />
                <div className="mt-3">ACER NITRO</div>
              </div>
              <div className="col-lg-4">
                <img src=".//images/Best-Acer-Laptops.jpg" width="85%" className="img rounded" alt="Acer Aspire 5" />
                <div className="mt-3">ACER ASPIRE 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
