import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Seller/List.css';
import Unavbar from './Unavbar';

function OrderItem() {
  const [item, setItem] = useState({});
  const [formData, setFormData] = useState({
    flatno: '',
    city: '',
    pincode: '',
    state: '',
  });
  const fee = 99;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/item/${id}`)
      .then((resp) => setItem(resp.data))
      .catch((error) => console.log("Failed to fetch item data:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!item || !item.userName || !item.userId || !item.description || !item.price || !item.title || !item.author || !item.genre || !item.itemImage) {
        throw new Error('Item data is missing required properties');
      }

      const { userName, description, price, title, author, genre, itemImage, userId } = item;
      const totalAmount = parseInt(price, 10) + fee;

      const updatedFormData = {
        ...formData,
        totalamount: totalAmount,
        seller: userName,
        sellerId: userId,
        description,
        booktitel: title,
        bookauthor: author,
        bookgenre: genre,
        itemImage,
      };

      const userid = JSON.parse(localStorage.getItem('user')).id;
      const username = JSON.parse(localStorage.getItem('user')).name;
      updatedFormData.userId = userid;
      updatedFormData.userName = username;

      await axios.post('http://localhost:4000/userorder', updatedFormData);
      alert('Ordered successfully');
      navigate('/myorders');
    } catch (error) {
      console.error('Error adding bike insurance:', error);
    }
  };

  return (
    <div className="order-item-page bg-gray-50 min-h-screen">
      <Unavbar />
      <div className="flex justify-center items-center py-12">
        <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">Complete Your Order</h2>
          <p className="text-center text-gray-600 mb-6">We need a few more details before you proceed to payment.</p>
          
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 mb-2">Shipping Address:</label>

            <div className="mb-4">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Flat No"
                name="flatno"
                value={formData.flatno}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-between mb-4">
              <input
                type="text"
                className="w-1/2 p-3 mr-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                className="w-1/2 p-3 ml-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            {item && (
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <img
                    src={`http://localhost:4000/${item.itemImage}`}
                    alt={`${item.itemtype} Image`}
                    className="w-full h-64 object-contain rounded-lg"
                  />
                </div>

                <div className="flex justify-between text-lg font-medium">
                  <span>Price:</span>
                  <span>₹{item.price}</span>
                </div>
                <div className="flex justify-between text-lg font-medium">
                  <span>Delivery:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-2 border-t pt-2">
                  <span>Total Amount:</span>
                  <span>₹{parseInt(item.price, 10) + fee}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
