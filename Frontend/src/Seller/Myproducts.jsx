import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Snavbar from './Snavbar';
import { FaTrash } from "react-icons/fa";

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>Follow us on:
          <a href="#" className="text-blue-400 ml-2">Facebook</a> | 
          <a href="#" className="text-blue-400 ml-2">Twitter</a> | 
          <a href="#" className="text-blue-400 ml-2">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

function Myproducts() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling state

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          console.log('Response data:', response.data); // Log the response data
          const taskData = response.data;
          setItems(taskData);
          setIsLoading(false); // Set loading to false once data is fetched
        })
        .catch((error) => {
          console.error('Error fetching tasks: ', error);
          setError('Error fetching data. Please try again later.');
          setIsLoading(false); // Set loading to false even if there's an error
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const deleteItem = (Id) => {
    // Optimized: delete the item locally without reloading the page
    axios
      .delete(`http://localhost:4000/itemdelete/${Id}`)
      .then(() => {
        setItems(items.filter(item => item._id !== Id)); // Remove item from state
        alert('Item is deleted');
      })
      .catch((error) => {
        console.error('Error deleting item: ', error);
        alert('Failed to delete the item. Please try again.');
      });
  };

  return (
    <div>
      <Snavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Books List</h2>

        {/* Display loading spinner while data is loading */}
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div> // Display error message
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item._id} className="bg-white p-4 rounded shadow">
                <div style={{ display: "flex", justifyContent: "flex-end", color: "red" }}>
                  <button
                    onClick={() => deleteItem(item._id)}
                    style={{ border: 'none', color: 'red', background: 'none' }}
                  >
                    <FaTrash />
                  </button>
                </div>
                <img
  src={`http://localhost:4000/${item.itemImage}`}
  alt="Item Image"
  className="rounded-t-lg object-cover w-full h-64" // This will make the image stretch to fit within the box without distortion
/>

                <div>
                  <p className="text-xl font-bold mb-2">{item.title}</p>
                  <p className="text-gray-700 mb-2">Author: {item.author}</p>
                  <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
                  <p className="text-blue-500 font-bold">Price: ${item.price}</p>
                  <p className="text-gray-600"><strong>Description:</strong>{item.description.slice(0, 259)}...</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Footer Component added here */}
      <Footer />
    </div>
  );
}

export default Myproducts;
