import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Link } from "react-router-dom";
import Anavbar from "./Anavbar";

function Ahome() {
  const [users, setUsers] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users: ", error));
    axios
      .get(`http://localhost:4000/sellers`)
      .then((response) => setVendors(response.data))
      .catch((error) => console.error("Error fetching vendors: ", error));
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching items: ", error));
    axios
      .get(`http://localhost:4000/orders`)
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders: ", error));
  }, []);

  const totalUsers = users.length;
  const totalVendors = vendors.length;
  const totalItems = items.length;
  const totalOrders = orders.length;

  const data = [
    { name: "Users", value: totalUsers, fill: "#6A0DAD" },
    { name: "Vendors", value: totalVendors, fill: "#FF6F61" },
    { name: "Items", value: totalItems, fill: "#28A745" },
    { name: "Orders", value: totalOrders, fill: "#FFC107" },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center font-sans"
      style={{
        backgroundImage:
          "url('https://www.desktopbackground.org/download/1280x720/2013/10/18/656011_website-backgrounds-white-blue_1322x936_h.jpg')",
      }}
    >
      <Anavbar />
      <h3 className="text-4xl font-bold text-center text-gray-800 mt-8">
        Dashboard Overview
      </h3>

      <div className="bg-white bg-opacity-80 w-11/12 max-w-6xl mx-auto mt-10 p-8 rounded-lg shadow-2xl">
        <div className="flex flex-wrap justify-around items-center gap-6 mb-8">
          <Link
            to="/users"
            className="w-48 h-24 bg-purple-700 hover:bg-purple-800 text-white rounded-lg shadow-lg flex items-center justify-center font-semibold text-lg transform hover:scale-105 transition-all duration-200"
          >
            USERS <br /> {totalUsers}
          </Link>
          <Link
            to="/sellers"
            className="w-48 h-24 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg flex items-center justify-center font-semibold text-lg transform hover:scale-105 transition-all duration-200"
          >
            VENDORS <br /> {totalVendors}
          </Link>
          <Link
            to="/booksall"
            className="w-48 h-24 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg flex items-center justify-center font-semibold text-lg transform hover:scale-105 transition-all duration-200"
          >
            ITEMS <br /> {totalItems}
          </Link>
          <Link
            to="/ordersall"
            className="w-48 h-24 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg shadow-lg flex items-center justify-center font-semibold text-lg transform hover:scale-105 transition-all duration-200"
          >
            ORDERS <br /> {totalOrders}
          </Link>
        </div>

        <div className="flex justify-center">
          <BarChart width={400} height={300} data={data} className="mx-auto">
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" barSize={50} />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Ahome;
