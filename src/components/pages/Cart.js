import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navebar from '../navebar/Navebar';
import { useAuth } from '../AuthContext';

export default function Cart({ cart, handleQuantityChange, handleDeleteItem }) {
  const navigate = useNavigate()
  const { logout } = useAuth();// Access the logout function from the authentication context

  const proceedToCheckout = () => {
    navigate('/Checkout', { state: { cart } });
  };
  return (
    <>
      <Navebar />

      {cart && cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="d-flex flex-column mt-5" style={{ marginLeft: '20px' }}>
          {cart &&
            cart.map((item) => (
              <div key={item.id} className="d-flex flex-row gap-3">
                <img
                  src={item.image}
                  alt={item.pname}
                  width={100}
                  height={100}
                  style={{ border: '1px solid #ccc', marginRight: '5%' }}
                />
                <h3 style={{ width: 200 }}>{item.pname}</h3>
                <p style={{ width: 200 }}>Price: ${item.price}</p>
                <p style={{ width: 200 }}>
                  Quantity:{' '}
                  <button className='btn btn-secondary' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span style={{ padding: '10px' }}>{item.quantity}</span>
                  <button className='btn btn-secondary' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </p>
                <p style={{ width: 200 }}>Total Price: ${item.price * item.quantity}</p>
                <p style={{ width: 200 }}>
                  <button className='btn btn-danger' onClick={() => handleDeleteItem(item.id)}>Delete</button>
                </p>
              </div>
            ))}
          <div className="text-center mt-3">
            <button className="btn btn-secondary" onClick={proceedToCheckout}>Proceed to Checkout</button>
          </div>

          {/* Logout button
          <div className="text-center mt-3">
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div> */}
        </div>
      )}
    </>
  );
}