import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Seller/List.css';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Unavbar from './Unavbar';
import Footer from '../Componenets/Footer'; 

function Myorders() {
  const [cars, setCars] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage = 'url("http://localhost:4000/uploads/image1.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.minHeight = '100vh';

    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getorders/${user.id}`)
        .then((response) => {
          setCars(response.data);
        })
        .catch((error) => {
          console.error('Error fetching orders:', error);
        });
    } else {
      console.log('User not found');
    }
  }, []);

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);
    return formattedDeliveryDate >= currentDate ? "ontheway" : "delivered";
  };

  const handleImageClick = (imageUrl) => {
    setZoomedImage(imageUrl);  
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);  
  };

  return (
    <div className="page-container">
      <Unavbar />
      <div className="content-wrap">
        <div 
          className="container"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '12px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <h1 className='text-center my-4' style={{ color: '#4A90E2', fontWeight: 'bold' }}>My Orders</h1>
          <div>
            {cars.map((item) => {
              const status = calculateStatus(item.Delivery);

              return (
                <Card
                  key={item._id}
                  style={{
                    width: '90%',
                    margin: '20px auto',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                    <div>
                      <img src={`http://localhost:4000/${item.itemImage}`} alt={`${item.itemtype} Image`} style={{ height: "80px", borderRadius: '8px' }} onClick={() => handleImageClick(`http://localhost:4000/${item.itemImage}`)}/>
                    </div>
                    <div style={{ minWidth: '120px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>Product Name:</p>
                      <p>{item.booktitle}</p>
                    </div>
                    <div style={{ minWidth: '120px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>Order ID:</p>
                      <p>{item._id.slice(0, 10)}</p>
                    </div>
                    <div style={{ minWidth: '150px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>Address:</p>
                      <p>{item.flatno}, {item.city}, ({item.pincode}), {item.state}</p>
                    </div>
                    <div style={{ minWidth: '120px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>Seller:</p>
                      <p>{item.seller}</p>
                    </div>
                    <div style={{ minWidth: '120px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>Booking Date:</p>
                      <p>{item.BookingDate}</p>
                    </div>
                    <div style={{ minWidth: '120px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>Delivery By:</p>
                      <p>{item.Delivery}</p>
                    </div>
                    <div style={{ minWidth: '100px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>Price:</p>
                      <p style={{ color: '#28a745', fontWeight: 'bold' }}>₹{item.totalamount}</p>
                    </div>
                    <div style={{ minWidth: '100px', textAlign: 'center' }}>
                      <p style={{ fontWeight: 'bold', color: '#333' }}>Status:</p>
                      <p style={{ color: status === "ontheway" ? '#ffc107' : '#28a745', fontWeight: 'bold' }}>{status}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
      {zoomedImage && (
        <div 
          className="zoomed-image-overlay" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={closeZoomedImage} 
        >
          <img 
            src={zoomedImage} 
            alt="Zoomed In" 
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(255, 255, 255, 0.8)',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Myorders;
