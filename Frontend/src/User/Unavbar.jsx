import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaHeart, FaList, FaSignOutAlt } from 'react-icons/fa'; // Icons for a more elegant look

const Unavbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#00072D", padding: '10px 0' }}>
      <Container>
        <Navbar.Brand>
          <Link to='/uhome' style={{ color: '#ffffff', textDecoration: "none", fontWeight: 'bold', fontSize: '24px' }}>BookScape</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ alignItems: 'center' }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              {/* Navbar Links with Icons and Hover Effect */}
              <Link 
                to="/uhome" 
                style={hovered === 0 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(0)} 
                onMouseLeave={handleLeave}
              >
                <FaHome /> Home
              </Link>
              <Link 
                to="/uproducts" 
                style={hovered === 1 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(1)} 
                onMouseLeave={handleLeave}
              >
                <FaBook /> Books
              </Link>
              <Link 
                to="/wishlist" 
                style={hovered === 2 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(2)} 
                onMouseLeave={handleLeave}
              >
                <FaHeart /> Wishlist
              </Link>
              <Link 
                to="/myorders" 
                style={hovered === 3 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(3)} 
                onMouseLeave={handleLeave}
              >
                <FaList /> My Orders
              </Link>
              <Link 
                to="/" 
                style={hovered === 4 ? { ...buttonStyle, ...linkStyleHover } : buttonStyle}
                onMouseEnter={() => handleHover(4)} 
                onMouseLeave={handleLeave}
              >
                <FaSignOutAlt /> Logout
              </Link>
              <h4 style={{ color: "#ffffff", margin: '0 0 0 15px', fontSize: '18px' }}>
                {user ? `Welcome ${user.name}` : ''}
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

export default Unavbar;
