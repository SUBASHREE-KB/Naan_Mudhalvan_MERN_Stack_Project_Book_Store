import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import { FaTrash, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Footer from '../Componenets/Footer';
function Myproducts() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          setItems(response.data);
          setIsLoading(false);
        })
        .catch(() => {
          setError('Error fetching data. Please try again later.');
          setIsLoading(false);
        });
    }
  }, []);

  const deleteItem = (Id) => {
    axios.delete(`http://localhost:4000/itemdelete/${Id}`)
      .then(() => {
        setItems(items.filter(item => item._id !== Id));
        alert('Item is deleted');
      })
      .catch(() => alert('Failed to delete the item. Please try again.'));
  };

  return (
    <div style={{
      backgroundImage: 'url(https://img.freepik.com/premium-photo/abstract-light-blue-background-wallpaper-template_1097558-39120.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      paddingTop: '20px'
    }}>
      <Snavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-semibold mb-6 text-center text-darkblue-100">Books List</h2>
        {isLoading ? (
          <div className="text-center">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item._id} className="card bg-white/80 p-4 rounded-lg shadow-lg hover:shadow-xl transform transition-all hover:scale-105" style={{ borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={item.itemImage ? `http://localhost:4000/${item.itemImage}` : '/defaultImage.jpg'}
                  alt="Item Image"
                  className="rounded-lg object-cover w-full h-64 cursor-pointer mb-4"
                  onClick={() => setSelectedItem(item)}
                />
                <div className="pt-4 space-y-2 text-center">
                  <p className="text-2xl font-bold cursor-pointer" onClick={() => setSelectedItem(item)}>
                    {item.title}
                  </p>
                  <p className="text-gray-700">Author: {item.author}</p>
                  <p className="text-gray-700">Genre: {item.genre}</p>
                  <p className="text-blue-500 font-bold badge">Price: ${item.price}</p>
                  <p className="text-gray-600"><strong>Description:</strong> {item.description.slice(0, 150)}...</p>
                </div>
                <button onClick={() => deleteItem(item._id)} className="text-red-500 hover:text-red-700 mt-4 transition duration-200 flex items-center">
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {selectedItem && (
        <Modal open={true} onClose={() => setSelectedItem(null)} center>
          <div className="p-4">
            <h2 className="text-3xl font-semibold mb-4">{selectedItem.title}</h2>
            <img src={`http://localhost:4000/${selectedItem.itemImage}`} alt="Item Image" className="object-cover w-full h-64 rounded-lg mb-4" />
            <p><strong>Author:</strong> {selectedItem.author}</p>
            <p><strong>Genre:</strong> {selectedItem.genre}</p>
            <p><strong>Price:</strong> ₹{selectedItem.price}</p>
            <p><strong>Description:</strong> {selectedItem.description}</p>
          </div>
        </Modal>
      )}
      
      <Footer />
    </div>
  );
}

export default Myproducts;
