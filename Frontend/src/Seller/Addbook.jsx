import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Vnavbar from './Snavbar';

function Additem() {
  const [formData, setFormData] = useState({
    description: '',
    title: '',
    author: '',
    genre: '',
    price: '',
    itemImage: null,
  });

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'itemImage' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('genre', formData.genre);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('price', formData.price);
      formDataToSend.append('itemImage', formData.itemImage);
      formDataToSend.append('userName', user.name);
      formDataToSend.append('userId', user.id);

      await axios.post('http://localhost:4000/items', formDataToSend);
      setModalMessage('Book added successfully');
      setModalVisible(true);
      setTimeout(() => {
        navigate('/myproducts');
      }, 2000);
    } catch (error) {
      setModalMessage('Error adding book. Please try again.');
      setModalVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: "url('https://cdn11.bigcommerce.com/s-muauag6klf/images/stencil/1280x1280/products/2806/66171/Modern%20Blue%20Jean%20Dustjacket%2047704%20-2%20copy__27539.1713902722.jpg?c=1')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          position: 'absolute',
          top: '0',
          left: 0,
          right: 0,
          bottom: '0',
          zIndex: -1,
          height: '100%',  // Ensure the image covers the full screen height
        }}
      ></div>

      {/* Navbar with fixed position */}
      <Vnavbar style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} />

      {/* Main content area */}
      <div className="max-w-lg mx-auto mt-28 p-8 bg-white bg-opacity-30 backdrop-blur-lg shadow-2xl rounded-xl relative z-10">
        <h2 className="text-4xl font-semibold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Book Title"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={formData.author}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Author Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Genre"
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Price"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Upload Book Image</label>
            <input
              type="file"
              name="itemImage"
              accept="image/*"
              onChange={handleChange}
              className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Upload Book Image"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg w-full focus:outline-none focus:shadow-outline transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

      {/* Modal for success or error message */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-xl font-semibold text-gray-800">{modalMessage}</p>
            <button
              onClick={() => setModalVisible(false)}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white mt-12 p-8">
        <div className="container mx-auto flex justify-between flex-wrap">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4 text-blue-400">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Welcome to our bookstore, where we celebrate the love of reading and bring a vast collection of books across genres to passionate readers.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="font-semibold text-lg mb-4 text-blue-400">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-2"><i className="fas fa-envelope"></i> bookstore@example.com</p>
            <p className="text-gray-400 text-sm mb-2"><i className="fas fa-phone"></i> (123) 456-7890</p>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-500 text-sm italic">
          "A room without books is like a body without a soul." — Marcus Tullius Cicero
        </div>
        <div className="text-center mt-12 text-gray-500 text-sm">
          &copy; 2024 Bookstore. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Additem;