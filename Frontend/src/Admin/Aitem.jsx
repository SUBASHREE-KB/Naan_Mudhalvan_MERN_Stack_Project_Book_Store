import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Anavbar from "./Anavbar";
import { Button } from "react-bootstrap";

const Uitem = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/admitem/${id}`)
      .then((resp) => setItem(resp.data))
      .catch(() => console.log("Did not get data"));
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Anavbar />
      <div className="container mx-auto px-4 py-8">
        {item && (
          <div className="bg-white shadow-lg rounded-lg p-6 md:flex">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                src={`http://localhost:4000/${item.itemImage}`}
                alt={`${item.itemtype} Image`}
                className="object-contain w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
                style={{ maxHeight: "400px" }}
              />
            </div>

            <div className="md:w-1/2 md:pl-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center md:text-left">
                {item.title}
              </h1>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-600">
                  Description
                </h2>
                <p className="text-gray-700 text-sm mt-1">{item.description}</p>
              </div>
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-600">Details</h2>
                <p className="text-gray-700">Title: {item.title}</p>
                <p className="text-gray-700">Author: {item.author}</p>
                <p className="text-gray-700">Genre: {item.genre}</p>
                <p className="text-gray-700">Price: ₹{item.price}</p>
                <p className="text-gray-700">Seller: {item.userName}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Uitem;
