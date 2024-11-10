import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Unavbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#00072D", padding: '10px 0' }}>
      <Container>
        <Navbar.Brand>
          <Link to='/uhome' style={{ color: '#ffffff', textDecoration: "none", fontWeight: 'bold', fontSize: '24px' }}>BookStore</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ alignItems: 'center' }}>
            <Link to="/uhome" style={{ padding: "10px 15px", color: "#ffffff", textDecoration: "none", fontSize: '18px' }}>Home</Link>
            <Link to="/uproducts" style={{ padding: "10px 15px", color: "#ffffff", textDecoration: "none", fontSize: '18px' }}>Books</Link>
            <Link to="/wishlist" style={{ padding: "10px 15px", color: "#ffffff", textDecoration: "none", fontSize: '18px' }}>Wishlist</Link>
            <Link to="/myorders" style={{ padding: "10px 15px", color: "#ffffff", textDecoration: "none", fontSize: '18px' }}>My Orders</Link>
            <Link to="/" style={{ padding: "10px 15px", color: "#ffffff", textDecoration: "none", fontSize: '18px' }}>Logout</Link>
            <h4 style={{ color: "#ffffff", margin: '0 0 0 15px', fontSize: '18px' }}>
              {user ? `Welcome ${user.name}` : ''}
            </h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
