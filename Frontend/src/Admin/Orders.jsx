import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Seller/List.css";
import { useNavigate } from "react-router-dom";
import Unavbar from "./Anavbar";
import Footer from "../Componenets/Footer";

function Myorders() {
  const [cars, setCars] = useState([]);
  const [zoomedImage, setZoomedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage =
      'url("http://localhost:4000/uploads/image1.jpg")';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.minHeight = "100vh";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      axios
        .get(`http://localhost:4000/orders`)
        .then((response) => {
          setCars(response.data);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    } else {
      console.log("User not found");
    }
  }, []);

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);
    return formattedDeliveryDate >= currentDate ? "ontheway" : "delivered";
  };

  const handleImageClick = (imageUrl) => {
    setZoomedImage(imageUrl);
  };

  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <div className="page-container">
      <Unavbar />
      <div className="content-wrap">
        <div
          className="container"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <h1
            className="text-center my-4"
            style={{ color: "#4A90E2", fontWeight: "bold" }}
          >
            All Orders
          </h1>
          <div style={{ overflowX: "auto" }}>
            <table
              className="table"
              style={{
                width: "100%",
                border: "1px solid #ddd",
                borderCollapse: "collapse",
              }}
            >
              <thead style={{ backgroundColor: "#f1f1f1" }}>
                <tr>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Image
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Product Name
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Order ID
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Address
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Seller
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Booking Date
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Delivery By
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Price
                  </th>
                  <th style={{ padding: "10px", textAlign: "center" }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((item) => {
                  const status = calculateStatus(item.Delivery);

                  return (
                    <tr
                      key={item._id}
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        borderRadius: "12px",
                      }}
                    >
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        <img
                          src={`http://localhost:4000/${item.itemImage}`}
                          alt={`${item.itemtype} Image`}
                          style={{
                            height: "80px",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            handleImageClick(
                              `http://localhost:4000/${item.itemImage}`
                            )
                          }
                        />
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {item.booktitle}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {item._id.slice(0, 10)}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {item.flatno}, {item.city}, ({item.pincode}),{" "}
                        {item.state}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {item.seller}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {item.BookingDate}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        {item.Delivery}
                      </td>
                      <td style={{ padding: "10px", textAlign: "center" }}>
                        ₹{item.totalamount}
                      </td>
                      <td
                        style={{
                          padding: "10px",
                          textAlign: "center",
                          color: status === "ontheway" ? "#ffc107" : "#28a745",
                          fontWeight: "bold",
                        }}
                      >
                        {status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
      {zoomedImage && (
        <div
          className="zoomed-image-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={closeZoomedImage}
        >
          <img
            src={zoomedImage}
            alt="Zoomed In"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(255, 255, 255, 0.8)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Myorders;
