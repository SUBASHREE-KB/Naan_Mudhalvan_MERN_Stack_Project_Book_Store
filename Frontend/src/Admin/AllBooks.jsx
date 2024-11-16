import React, { useState, useEffect } from "react";
import axios from "axios";
import Unavbar from "./Anavbar";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";


function Products() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching items: ", error);
      });
  }, []);

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Unavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Books List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div
                className="w-full h-60 flex justify-center items-center bg-gray-200 rounded-t-lg cursor-pointer"
                onClick={() =>
                  openModal(`http://localhost:4000/${item.itemImage}`)
                }
              >
                <img
                  src={`http://localhost:4000/${item.itemImage}`}
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
                  <Button
                    style={{
                      backgroundColor: "#3498db",
                      border: "none",
                      padding: "10px 20px",
                      fontSize: "14px",
                    }}
                  >
                    <Link
                      to={`/adminitem/${item._id}`}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Body className="p-0">
            {modalImage && (
              <img
                src={modalImage}
                alt="Zoomed Item"
                className="w-full h-auto"
                style={{ borderRadius: "8px" }}
              />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Products;
