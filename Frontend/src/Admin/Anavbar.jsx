import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Anavbar = () => {
  const user = localStorage.getItem('user');
  const userName = user ? JSON.parse(user).name : 'Guest';

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
            BookStore (Admin)
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              to="/ahome"
              style={{
                padding: "10px",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: '18px',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              Home
            </Link>
            <Link
              to="/users"
              style={{
                padding: "10px",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: '18px',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              Users
            </Link>
            <Link
              to="/sellers"
              style={{
                padding: "10px",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: '18px',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              Sellers
            </Link>
            <Link
              to="/"
              style={{
                padding: "10px",
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: '18px',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              Logout
            </Link>
            <h4 style={{ color: "#FFFFFF", padding: "0 10px", fontSize: '18px' }}>
              ({userName})
            </h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Anavbar;
