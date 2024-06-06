import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import axios from 'axios';

function Navebar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const userId = currentUser.id;
      await axios.get(`http://localhost:8000/api/user/logout/${userId}`);
      logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleDropdown = () => {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
  };

  return (
    <>
      <div className="uper-nav container-fluid">
        {/* Your search bar code here */}
      </div>

      <div className="container-fluid nav-color sticky-top">
        <div className="head">
          <nav className="navbar navbar-light">
            <h1>MAX LAPTOPS</h1>
            <nav className="nav justify-content-between align-items-center">
              <Link to="/">
                <a href="#" className=" p-2">
                  Home
                </a>
              </Link>

              <Link to="/Aboutus">
                <a href="#" className=" p-2">
                  About US
                </a>
              </Link>

              <Link to="/Product">
                <a href="#" className=" p-2">
                  Shop
                </a>
              </Link>
              
              {/* Conditionally render the "Order" link */}
              {currentUser && (
                <Link to="/Cart">
                  <a href="#" className="p-2">
                    Cart
                  </a>
                </Link>
              )}
              
              {/* Conditionally render the "Order" link */}
              {currentUser && (
                <Link to="/Order">
                  <a href="#" className="p-2">
                    Order
                  </a>
                </Link>
              )}
              
 
              <Link to="/Contact">
                <a href="#" className=" p-2">
                  Contact
                </a>
              </Link>
            
              <Link to="/Signup">
                <a href="#" className="p-2">
                  Signup
                </a>
              </Link>

              {/* Render the customer's name with dropdown */}
              <div className="dropdown">
                <button className="btn dropdown-toggle"  style={{ color: '#d3d3d3' }} onClick={toggleDropdown}>
                  {currentUser ? currentUser.name : 'Signin'}
                </button>
                <div className="dropdown-menu" id="dropdownMenu">
                  {currentUser && (
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  )}
                  {!currentUser && (
                    <Link to="/Signin">
                      <button className="dropdown-item">Login</button>
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navebar;
