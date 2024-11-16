import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBoxOpen,
  FaPlusCircle,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";

const Snavbar = () => {
  const get = localStorage.getItem("user");
  const navbarBlueColor = "#00072D";

  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{
        backgroundColor: navbarBlueColor,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Navbar.Brand
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "2rem",
            fontWeight: "600",
          }}
        >
          <Link to="/shome" style={{ color: "white", textDecoration: "none" }}>
            BookScape
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <Link
                to="/shome"
                style={
                  hovered === 0
                    ? { ...buttonStyle, ...linkStyleHover }
                    : buttonStyle
                }
                onMouseEnter={() => handleHover(0)}
                onMouseLeave={handleLeave}
              >
                <FaHome /> Home
              </Link>
              <Link
                to="/myproducts"
                style={
                  hovered === 1
                    ? { ...buttonStyle, ...linkStyleHover }
                    : buttonStyle
                }
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={handleLeave}
              >
                <FaBoxOpen /> My Products
              </Link>
              <Link
                to="/addbook"
                style={
                  hovered === 2
                    ? { ...buttonStyle, ...linkStyleHover }
                    : buttonStyle
                }
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={handleLeave}
              >
                <FaPlusCircle /> Add Books
              </Link>
              <Link
                to="/orders"
                style={
                  hovered === 3
                    ? { ...buttonStyle, ...linkStyleHover }
                    : buttonStyle
                }
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={handleLeave}
              >
                <FaList /> Orders
              </Link>
              <Link
                to="/"
                style={
                  hovered === 4
                    ? { ...buttonStyle, ...linkStyleHover }
                    : buttonStyle
                }
                onMouseEnter={() => handleHover(4)}
                onMouseLeave={handleLeave}
              >
                <FaSignOutAlt /> Logout
              </Link>
            </div>

            <h4
              style={{ color: "white", marginLeft: "20px", fontWeight: "400" }}
            >
              Welcome {JSON.parse(get).name}
            </h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const buttonStyle = {
  padding: "8px 20px",
  backgroundColor: "white",
  color: "#00072D",
  textDecoration: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  transition: "background-color 0.3s, color 0.3s, transform 0.3s",
  border: "2px solid white",
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

const linkStyleHover = {
  backgroundColor: "#00072D",
  color: "white",
  transform: "scale(1.05)",
};

export default Snavbar;
