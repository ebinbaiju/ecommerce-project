import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navebar from '../navebar/Navebar';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navebar />
      <div className="container first-view mt-3">
        <div className="row align-items-center ">
          <div className="col-lg-12">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./images/111.jpg"
                    className="d-block w-100"
                    alt="Acer Predator Helios Neo"
                    height="600px"
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h1 className="casad-hed">MAX LAPTOPS</h1>
                    <div className="mt-3">
                      Your ultimate destination for all laptops. At Max Laptops,
                      we pride ourselves on offering a diverse range of
                      top-notch laptops to suit every need and budget. Whether
                      you're a student, professional, gamer, or casual user,
                      we've got you covered with our extensive selection of
                      laptops from leading brands.
                    </div>
                    <Link to="/Product">
                      <button className="btn btn-outline-warning mt-3 badge-pill">
                        Shop Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/812KxAd9Z9L._AC_UF1000,1000_QL80_.jpg"
                    className="d-block w-100"
                    alt="Acer Swift 3"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/-original-imagtq7f4urd7f8z.webp"
                    className="d-block w-100"
                    alt="HP Pavilion"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/123.jpeg"
                    className="d-block w-100"
                    alt="Lenovo Legion"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* Empty column */}
          </div>
        </div>
        <div className="card wy-shop">
          <div className="row mt-4 mb-5">
            <h1 className="col-lg-12 text-center text-info">Why Shop With Us</h1>
            <div className="row mt-5">
              <div className="col-lg-3">
                <img src="./images/Razer-Blade-15-Advanced-2.jpg" width="280px" alt="Razer Blade" />
                <h6 className="mt-4">Razer-Blade</h6>
                <div>Razer-Blade 15 Gaming Thunderbolt 3</div>
              </div>
              <div className="col-lg-3">
                <img src="./images/Acer-Nitro-V-15-Laptop-.webp" width="300px" className="mt-2 " alt="Acer Nitro" />
                <h6 className="mt-5">Acer</h6>
                <div>Acer-Nitro-V-15</div>
              </div>
              <div className="col-lg-3">
                <img src="./images/predator-laptop-helios-neo-.jpg" width="310px" className="pl-2" alt="Acer Predator" />
                <h6 className="mt-4">Acer</h6>
                <div>ACER PREDATOR</div>
              </div>
              <div className="col-lg-3">
                <img src="./images/h470 rog.jpeg" width="280px" alt="Asus ROG" />
                <h6>Asus</h6>
                <div>ROG</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-lg-4">
            <h1 className="title-color">
              " Discover Max Laptops Your Gateway to Cutting-Edge Laptops"
            </h1>
            <Link to="/Product">
              <button className="btn btn-outline-danger mt-3 badge-pill">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="col-lg-4">
            <img src="./images/rog.jpg" width="100%" className="img" alt="Asus ROG" />
            <div>ASUS ROG</div>
          </div>
          <div className="col-lg-4">
            <img src="./images/predator.jpg" width="100%" className="img" alt="Acer Predator" />
            <div>ACER PREDATOR</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-4">
            <img src="./images/lenovo.png" width="95%" className="img" alt="Lenovo Legion" />
            <div>LENOVO LEGION</div>
          </div>
          <div className="col-lg-4">
            <img src="./images/razerblade.jpg" width="95%" className="img" alt="Razer Blade" />
            <div>RAZER-BLADE</div>
          </div>
          <div className="col-lg-4">
            <img src="./images/hpvitus.png" width="85%" className="img" alt="HP Vitus" />
            <div>HP VITUS</div>
          </div>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-lg-4">
            <h1>Customer Reviews</h1>
          </div>
          <div className="col-lg-4">
            <div className="star">★ ★ ★ ★ ★</div>
            <div className="text-muted mt-2">
              "Max Laptop's website is a true gem! Navigating through their extensive selection of laptops was a breeze,
              thanks to the intuitive layout and helpful filters. The product descriptions were detailed and informative,
              helping me make an informed decision about which laptop to purchase. Overall, I had a fantastic experience shopping
              on Max Laptop's website and would definitely recommend it to anyone in need of a new laptop!"
            </div>
            <div className="mt-3">Rajnish Singh</div>
          </div>
          <div className="col-lg-4">
            <div className="star">★ ★ ★ ★ ★</div>
            <div className="text-muted mt-2">
              "Max Laptop's website exceeded my expectations! As someone who's not particularly tech-savvy,
              I was pleasantly surprised by how user-friendly and easy to navigate the site was.
              The clean layout and clear categories made it simple for me to find exactly what I was looking for.
              Overall, Max Laptop's website provided a seamless shopping experience, and I wouldn't hesitate to recommend it to others!"
            </div>
            <div className="mt-3">Rasna G</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
