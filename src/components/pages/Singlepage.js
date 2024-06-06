// Singlepage.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Singlepage = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/product/${productId}/`);
        setProduct({ ...response.data, quantity: 1 });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product); // Call the addToCart function with the product as an argument
      alert('Product added to cart');
    }
  };
  
  return (
    <div className="container mt-5">
      {product ? (
        <div className="card border-primary col-9 shadow">
          <div className="card-body d-flex">
            <div className="col-6">
              <h3 className="card-title mb-4">{product.pname}</h3>
              <div className="rounded border border-success p-2" style={{ height: "270px", maxWidth: "70%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={product.image} alt={product.pname} style={{ maxHeight: "100%", maxWidth: "100%", width: "auto", height: "auto" }} className="card-img" />
              </div>
            </div>
            <div className="col-6 p-4">
              <h5 className="card-text mt-3">{product.pdescription}</h5>
            
              <div className="mt-3">
              <h6 className="btn btn-success rounded text-white mt-2" style={{bottom:"10px"}} >Price: ${product.price} </h6>
                {/* <button className="btn btn-outline-danger mr-2" onClick={handleAddToCart}>Add to Cart</button> */}
                <Link to='/Product'>
                  <button className="btn btn-outline-secondary badge-pill">Back to Shop</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Singlepage;
