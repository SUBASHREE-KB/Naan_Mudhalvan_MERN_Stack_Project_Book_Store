import React, { useState, useEffect } from "react";
import axios from "axios";
import Snavbar from "./Snavbar";
import { FaTrash } from "react-icons/fa";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Footer from "../Componenets/Footer";

function Myproducts() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      axios
        .get(`http://localhost:4000/getitem/${user.id}`)
        .then((response) => {
          setItems(response.data);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Error fetching data. Please try again later.");
          setIsLoading(false);
        });
    }
  }, []);

  const deleteItem = (Id) => {
    axios
      .delete(`http://localhost:4000/itemdelete/${Id}`)
      .then(() => {
        setItems(items.filter((item) => item._id !== Id));
        alert("Item is deleted");
      })
      .catch(() => alert("Failed to delete the item. Please try again."));
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/abstract-light-blue-background-wallpaper-template_1097558-39120.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "0px",
      }}
    >
      <Snavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Books List
        </h2>
        {isLoading ? (
          <div className="text-center">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item._id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
                <div
                  className="w-full h-60 flex justify-center items-center bg-gray-200 rounded-t-lg cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={
                      item.itemImage
                        ? `http://localhost:4000/${item.itemImage}`
                        : "/defaultImage.jpg"
                    }
                    alt="Item Image"
                    className="object-contain w-full h-full rounded-t-lg"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </p>
                  <p className="text-gray-600 mb-2">Author: {item.author}</p>
                  <p className="text-gray-600 mb-2">Genre: {item.genre}</p>
                  <p className="text-blue-600 font-semibold text-lg">
                    Price: ₹{item.price}
                  </p>
                  <div className="mt-4 flex justify-center gap-4">
                    <button
                      onClick={() => deleteItem(item._id)}
                      className="text-red-500 hover:text-red-700 mt-4 transition duration-200 flex items-center"
                    >
                      <FaTrash className="mr-2" /> Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedItem && (
        <Modal open={true} onClose={() => setSelectedItem(null)} center>
          <div className="p-4">
            <h2 className="text-3xl font-semibold mb-4">
              {selectedItem.title}
            </h2>
            <img
              src={`http://localhost:4000/${selectedItem.itemImage}`}
              alt="Item Image"
              className="object-cover w-full h-64 rounded-lg mb-4"
            />
            <p>
              <strong>Author:</strong> {selectedItem.author}
            </p>
            <p>
              <strong>Genre:</strong> {selectedItem.genre}
            </p>
            <p>
              <strong>Price:</strong> ₹{selectedItem.price}
            </p>
            <p>
              <strong>Description:</strong> {selectedItem.description}
            </p>
          </div>
        </Modal>
      )}

      <Footer />
    </div>
  );
}

export default Myproducts;
