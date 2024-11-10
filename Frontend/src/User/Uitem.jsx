import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';

const Uitem = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/item/${id}`)
            .then((resp) => setItem(resp.data))
            .catch(() => console.log("Did not get data"));
    }, [id]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Unavbar />
            <div className="container mx-auto px-4 py-8">
                {item && (
                    <div className="bg-white shadow-lg rounded-lg p-6 md:flex">
                        {/* Image section */}
                        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                            <img
                                src={`http://localhost:4000/${item.itemImage}`}
                                alt={`${item.itemtype} Image`}
                                className="object-contain w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
                                style={{ maxHeight: '400px' }}
                            />
                        </div>

                        {/* Information Section */}
                        <div className="md:w-1/2 md:pl-8">
                            <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                                {item.itemtype} - {item._id.slice(3, 7)}
                            </h1>
                            <div className="mb-4">
                                <h2 className="text-lg font-medium text-gray-600">Description</h2>
                                <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                            </div>
                            <div className="mb-4">
                                <h2 className="text-lg font-medium text-gray-600">Info</h2>
                                <p className="text-gray-700">Title: {item.title}</p>
                                <p className="text-gray-700">Author: {item.author}</p>
                                <p className="text-gray-700">Genre: {item.genre}</p>
                                <p className="text-gray-700">Price: ₹{item.price}</p>
                                <p className="text-gray-700">Seller: {item.userName}</p>
                            </div>
                            <div className="flex justify-center md:justify-start mt-6">
                                <Link to={`/orderitem/${item._id}`}>
                                    <Button
                                        variant="primary"
                                        className="px-4 py-2 rounded shadow-sm transition-all duration-300"
                                        style={{ backgroundColor: '#3498db', border: 'none' }}
                                    >
                                        Buy Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Uitem;
