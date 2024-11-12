import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Snavbar from './Snavbar';
import Footer from '../Componenets/Footer';

function Shome() {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
        });

      axios.get(`http://localhost:4000/getsellerorders/${user.id}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bookings: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const totalItems = items.length;
  const totalOrders = orders.length;

  const data = [
    { name: 'Items', value: totalItems, fill: '#5A99D3' },  // Light blue for Items
    { name: 'Orders', value: totalOrders, fill: '#00072D' },  // Dark blue for Orders
  ];

  return (
    <div style={{ backgroundColor: '#F0F8FF', minHeight: '100vh', color: '#1A2E45', fontFamily: 'Arial, sans-serif' }}>
      <Snavbar />
      <div className="container mt-5">
        <h3 className="text-4xl font-semibold mb-5 text-center" style={{ color: '#1A2E45', fontWeight: 600 }}>Dashboard</h3>
        <Card body style={{
          backgroundColor: '#FFFFFF', 
          color: '#1A2E45',
          width: '80%', 
          margin: 'auto', 
          marginTop: '20px', 
          height: '600px', 
          borderRadius: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          maxWidth: '900px'
        }}>
          <div className="d-flex justify-content-around align-items-center p-4">
            <Link to="/myproducts" style={{ textDecoration: "none" }}>
              <div className="dashboard-item w-64 h-36" style={{
                backgroundColor: '#EAF3FF',
                borderRadius: '12px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                color: '#1A2E45',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                padding: '15px'
              }}>
                Items <br /> <span style={{ fontSize: '2.5rem', color: '#0046A1' }}>{totalItems}</span>
              </div>
            </Link>
            <Link to="/orders" style={{ textDecoration: "none" }}>
              <div className="dashboard-item w-64 h-36" style={{
                backgroundColor: '#F0F0F5', 
                borderRadius: '12px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                color: '#1A2E45',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                padding: '15px'
              }}>
                Total Orders <br /> <span style={{ fontSize: '2.5rem', color: '#00072D' }}>{totalOrders}</span>
              </div>
            </Link>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <BarChart width={500} height={300} data={data}>
              <XAxis dataKey="name" stroke="#1A2E45" />
              <YAxis stroke="#1A2E45" />
              <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', color: '#1A2E45' }} />
              <Legend />
              <Bar dataKey="value" barSize={50} />
            </BarChart>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Shome;
