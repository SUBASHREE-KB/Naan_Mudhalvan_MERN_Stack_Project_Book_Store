import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Snavbar from "./Snavbar";
import Footer from "../Componenets/Footer";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      axios
        .get(`http://localhost:4000/getsellerorders/${user.id}`)
        .then((response) => {
          setOrders(response.data);
        })
        .catch((error) => {
          console.error("Error fetching bookings: ", error);
        });
    }
  }, []);

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);
    return formattedDeliveryDate >= currentDate ? "ontheway" : "delivered";
  };

  return (
    <div
      style={{
        backgroundImage: "url(http://localhost:4000/uploads/image1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "0px",
      }}
    >
      <Snavbar />
      <div className="container mx-auto mt-8 p-6 bg-white bg-opacity-80 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          Orders
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Product Image</th>
                <th className="py-2 px-4 text-left">Product Name</th>
                <th className="py-2 px-4 text-left">Order ID</th>
                <th className="py-2 px-4 text-left">Customer Name</th>
                <th className="py-2 px-4 text-left">Address</th>
                <th className="py-2 px-4 text-left">Booking Date</th>
                <th className="py-2 px-4 text-left">Delivery By</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => {
                const status = calculateStatus(item.Delivery);
                return (
                  <tr key={item._id} className="border-b hover:bg-gray-100">
                    <td className="py-4 px-4">
                      <img
                        src={`http://localhost:4000/${item?.itemImage}`}
                        alt={`${item.itemtype} Image`}
                        style={{ height: "50px", borderRadius: "8px" }}
                      />
                    </td>
                    <td className="py-4 px-4">{item.booktitle}</td>
                    <td className="py-4 px-4">{item._id.slice(0, 10)}</td>
                    <td className="py-4 px-4">{item.userName}</td>
                    <td className="py-4 px-4">
                      {item.flatno}, {item.city}, ({item.pincode}), {item.state}
                    </td>
                    <td className="py-4 px-4">{item.BookingDate}</td>
                    <td className="py-4 px-4">{item.Delivery}</td>
                    <td className="py-4 px-4">₹{item.totalamount}</td>
                    <td className="py-4 px-4">
                      <span
                        className={
                          status === "delivered"
                            ? "text-green-500"
                            : "text-yellow-500"
                        }
                      >
                        {status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
