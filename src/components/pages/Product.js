import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Navebar from '../navebar/Navebar';
import Footer from '../footer/Footer';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product({ cart, addToCart: addToCartProp }) {
  const [products, setProducts] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/product/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    if (currentUser) {
      addToCartProp(item);
      navigate('/cart');
    } else {
      alert("Please log in to add items to your cart");
      navigate('/Signup');
    }
  };

  return (
    <>
      <Navebar />
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-lg-12">
            <h1>All Products</h1>
            <p className="lead">We package the products with best services to make you a happy customer.</p>
          </div>
        </div>

        <div className="row mb-5 mt-5 pt-5">
          {products.map((item) => (
            <div key={item.id} className="col-lg-4 mb-4">
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.pname} />
                <div className="card-body">
                  <h5 className="card-title">{item.pname}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-outline-primary" onClick={() => handleAddToCart(item)}>
                      Add to Cart
                    </button>
                    <Link to={`/singlepage/${item.id}`} className="btn btn-outline-secondary">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <h2>Max Laptops for Everyday Use</h2>
            <p className="lead">Showcasing our most purchased products</p>
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            {products.slice(0, 5).map((item) => (
              <img key={item.id} src={item.image} alt={item.pname} className="img-fluid mx-3" style={{ maxWidth: '200px' }} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
