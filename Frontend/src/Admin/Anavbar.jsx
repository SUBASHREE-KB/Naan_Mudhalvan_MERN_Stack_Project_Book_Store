import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaStoreAlt, FaSignOutAlt } from 'react-icons/fa'; // Icons for admin-related actions

const Anavbar = () => {
  const user = localStorage.getItem('user');
  const userName = user ? JSON.parse(user).name : 'Guest';

  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#00072D', // Changed to a solid color
        padding: '10px 0',
        fontFamily: "'Roboto', sans-serif",
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/shome"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: 'bold',
              fontSize: '24px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            }}
          >
            BookScape (Admin)
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              {/* Navbar Links with Icons and Hover Effect */}
              <Link
                to="/ahome"
                style={hovered === 0 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(0)}
                onMouseLeave={handleLeave}
              >
                <FaHome /> Home
              </Link>
              <Link
                to="/users"
                style={hovered === 1 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={handleLeave}
              >
                <FaUsers /> Users
              </Link>
              <Link
                to="/sellers"
                style={hovered === 2 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={handleLeave}
              >
                <FaStoreAlt /> Sellers
              </Link>
              <Link
                to="/"
                style={hovered === 3 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={handleLeave}
              >
                <FaSignOutAlt /> Logout
              </Link>
              <h4 style={{ color: "#FFFFFF", padding: "0 10px", fontSize: '18px' }}>
                ({userName})
              </h4>
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

export default Anavbar;
