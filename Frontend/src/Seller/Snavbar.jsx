// src/components/Navbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaHome, FaBoxOpen, FaPlusCircle, FaList, FaSignOutAlt } from 'react-icons/fa'; // Icons for a more elegant look

const Snavbar = () => {
  const get = localStorage.getItem('user');
  const navbarBlueColor = "#00072D"; // Updated color code

  // State for hover effect
  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: navbarBlueColor, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
      <Container>
        {/* Site Title with Elegant Font */}
        <Navbar.Brand style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: '600' }}>
          <Link to='/shome' style={{ color: "white", textDecoration: "none" }}>BookScape</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              {/* Navbar Links with Icons and Hover Effect */}
              <Link 
                to="/shome" 
                style={hovered === 0 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(0)} 
                onMouseLeave={handleLeave}
              >
                <FaHome /> Home
              </Link>
              <Link 
                to="/myproducts" 
                style={hovered === 1 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(1)} 
                onMouseLeave={handleLeave}
              >
                <FaBoxOpen /> My Products
              </Link>
              <Link 
                to="/addbook" 
                style={hovered === 2 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(2)} 
                onMouseLeave={handleLeave}
              >
                <FaPlusCircle /> Add Books
              </Link>
              <Link 
                to="/orders" 
                style={hovered === 3 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(3)} 
                onMouseLeave={handleLeave}
              >
                <FaList /> Orders
              </Link>
              <Link 
                to="/" 
                style={hovered === 4 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(4)} 
                onMouseLeave={handleLeave}
              >
                <FaSignOutAlt /> Logout
              </Link>
            </div>
            {/* Display Username */}
            <h4 style={{ color: "white", marginLeft: "20px", fontWeight: '400' }}>({JSON.parse(get).name})</h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Button styling for navbar items
const buttonStyle = {
  padding: "8px 20px",
  backgroundColor: "white",
  color: "#00072D", // Adjusted text color to match navbar background
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  transition: "background-color 0.3s, color 0.3s, transform 0.3s",
  border: "2px solid white",
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

// Hovered button style
const linkStyleHover = {
  backgroundColor: "#00072D", // New navbar color on hover
  color: "white",
  transform: "scale(1.05)", // Slight zoom effect
};

export default Snavbar;
