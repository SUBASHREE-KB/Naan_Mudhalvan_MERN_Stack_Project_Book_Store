import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Snavbar from './Snavbar';
import Footer from '../Componenets/Footer';

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get(`http://localhost:4000/getsellerorders/${user.id}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bookings: ', error);
        });
    }
  }, []);

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);
    return formattedDeliveryDate >= currentDate ? "ontheway" : "delivered";
  };

  return (
    <div 
      style={{
        backgroundImage: 'url(https://img.freepik.com/premium-photo/abstract-light-blue-background-wallpaper-template_1000823-261335.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Snavbar />
      <div className="container mx-auto mt-8 p-6 bg-white bg-opacity-80 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4 text-center text-gray-800">Orders</h3>
        <div>
          {orders.map((item) => {
            const status = calculateStatus(item.Delivery);
            return (
              <Card
                key={item._id}
                style={{
                  width: '90%',
                  margin: 'auto',
                  backgroundColor: '#ffffff',
                  borderRadius: '8px',
                  paddingTop: '15px',
                  marginBottom: '35px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '15px' }}>
                  <img src={`http://localhost:4000/${item?.itemImage}`} alt={`${item.itemtype} Image`} style={{ height: "80px", borderRadius: '8px' }} />
                  <div>
                    <p><strong>Product Name:</strong></p>
                    <p>{item.itemname}</p>
                  </div>
                  <div>
                    <p><strong>Order ID:</strong></p>
                    <p>{item._id.slice(0,10)}</p>
                  </div>
                  <div>
                    <p><strong>Customer Name:</strong></p>
                    <p>{item.userName}</p>
                  </div>
                  <div>
                    <p><strong>Address:</strong></p>
                    <p>{item.flatno}, {item.city}, ({item.pincode}), {item.state}</p>
                  </div>
                  <div>
                    <p><strong>Booking Date:</strong></p>
                    <p>{item.BookingDate}</p>
                  </div>
                  <div>
                    <p><strong>Delivery By:</strong></p>
                    <p>{item.Delivery}</p>
                  </div>
                  <div>
                    <p><strong>Warranty:</strong></p>
                    <p>1 year</p>
                  </div>
                  <div>
                    <p><strong>Price:</strong></p>
                    <p>${item.totalamount}</p>
                  </div>
                  <div>
                    <p><strong>Status:</strong></p>
                    <p className={status === 'delivered' ? 'text-green-500' : 'text-yellow-500'}>{status}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
