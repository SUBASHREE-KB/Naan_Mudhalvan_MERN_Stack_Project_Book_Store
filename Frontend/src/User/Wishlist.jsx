import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Unavbar from './Unavbar';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios
        .get(`http://localhost:4000/wishlist/${user.id}`)
        .then((response) => {
          const wishlistData = response.data;
          setWishlist(wishlistData);
        })
        .catch((error) => {
          console.error('Error fetching wishlist items: ', error);
        });
    } else {
      console.log('ERROR');
    }
  }, []);

  const removeFromWishlist = async (itemId) => {
    try {
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId });
      
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`);
        setWishlist(response.data);
      } else {
        console.log('ERROR');
      }
    } catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Wishlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div key={item._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <div className="w-full h-60 flex justify-center items-center bg-gray-200 rounded-t-lg">
                <img
                  src={`http://localhost:4000/${item.itemImage}`}
                  alt="Item Image"
                  className="object-contain w-full h-full rounded-t-lg"
                />
              </div>
              <div className="text-center mt-4">
                <p className="text-xl font-semibold text-gray-800 mb-2">{item.title}</p>
                <p className="text-gray-600 mb-2">Author: {item.author}</p>
                <p className="text-gray-600 mb-2">Genre: {item.genre}</p>
                <p className="text-blue-600 font-semibold text-lg">Price: ₹{item.price}</p>

                <div className="mt-4 flex justify-center gap-4">
                  <Button
                    style={{ backgroundColor: '#e74c3c', border: 'none', padding: '10px 20px', fontSize: '14px' }}
                    onClick={() => removeFromWishlist(item.itemId)}
                  >
                    Remove from Wishlist
                  </Button>

                  <Button
                    style={{ backgroundColor: '#3498db', border: 'none', padding: '10px 20px', fontSize: '14px' }}
                  >
                    <Link to={`/uitem/${item.itemId}`} style={{ color: 'white', textDecoration: 'none' }}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
