// src/components/Navbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaHome, FaSignInAlt, FaUserAlt, FaStoreAlt, FaUserShield } from 'react-icons/fa'; // Updated icons

const HomeNavbar = () => {
  const navbarBlueColor = "#00072D"; // Navbar color code

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
        <Navbar.Brand style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: '600' }}>
          <Link to='/' style={{ color: "white", textDecoration: "none" }}>BookScape</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              {/* Navbar Links with Hover Effect */}
              <Link 
                to="/login" 
                style={hovered === 0 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(0)} 
                onMouseLeave={handleLeave}
              >
                <FaUserAlt /> User
              </Link>
              <Link 
                to="/slogin" 
                style={hovered === 1 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(1)} 
                onMouseLeave={handleLeave}
              >
                <FaStoreAlt /> Seller
              </Link>
              <Link 
                to="/alogin" 
                style={hovered === 2 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(2)} 
                onMouseLeave={handleLeave}
              >
                <FaUserShield /> Admin
              </Link>
            </div>
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

export default HomeNavbar;
