import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Card } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Anavbar from "./Anavbar";

const Users = () => {
  const [userbookings, setUserbookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users`)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Failed to fetch data.", error));
  }, []);

  const deleteData = (taskId) => {
    axios.delete(`http://localhost:4000/userdelete/${taskId}`);
    window.location.assign("/users");
    alert("User is deleted");
  };

  const deleteorder = (taskId) => {
    axios.delete(`http://localhost:4000/userorderdelete/${taskId}`);
    window.location.assign("/users");
    alert("Deleted");
  };

  const fetchUserBikeData = (userId) => {
    axios
      .get(`http://localhost:4000/getorders/${userId}`)
      .then((response) => {
        setUserbookings(response.data);
        toggleDetails();
      })
      .catch((error) => console.error("Error fetching user bike data:", error));
  };

  const calculateStatus = (Delivery) => {
    const currentDate = new Date();
    const formattedDeliveryDate = new Date(Delivery);
    return formattedDeliveryDate >= currentDate ? "ontheway" : "delivered";
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/previews/003/127/954/non_2x/abstract-template-blue-background-white-squares-free-vector.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingBottom: "20px",
      }}
    >
      <Anavbar />
      <br />
      <h1
        className="text-center"
        style={{
          color: "#FFFFFF",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        Users
      </h1>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table
          hover
          style={{
            width: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            color: "#333",
            borderCollapse: "separate",
            borderSpacing: "0 10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead
            style={{
              backgroundColor: "#0044CC",
              color: "white",
              textAlign: "center",
            }}
          >
            <tr>
              <th style={{ padding: "15px" }}>Sl/No</th>
              <th>UserId</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr
                key={item._id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f4f6f8" : "#e9ecef",
                  transition: "background-color 0.3s ease",
                }}
              >
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {index + 1}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {item._id}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {item.name}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  {item.email}
                </td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <button style={{ border: "none", background: "none" }}>
                    <Link
                      to={`/useredit/${item._id}`}
                      style={{
                        color: "#0044CC",
                        textDecoration: "none",
                        fontSize: "18px",
                      }}
                    >
                      <FaEdit />
                    </Link>
                    <br />
                  </button>
                  <button
                    onClick={() => deleteData(item._id)}
                    style={{
                      border: "none",
                      color: "red",
                      background: "none",
                      fontSize: "18px",
                    }}
                  >
                    <FaTrash />
                    <br />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
