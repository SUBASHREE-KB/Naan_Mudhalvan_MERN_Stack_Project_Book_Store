import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

// Background and main container styles
const style = {
    backgroundImage: 'url("https://i.pinimg.com/564x/a0/26/b5/a026b5306601928cd3d854b1849fb3d4.jpg")', // Background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
};

// Navbar positioning styles
const navbarStyle = {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
};

// Content container styles for split layout
const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: '0 10%',
};

// Left side text container styles
const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  // Center content horizontally
    color: 'black',
    maxWidth: '50%',
};


// Heading text style
const headingStyle = {
    fontSize: '3rem',
    fontFamily: 'Garamond, serif',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    marginBottom: '20px',
    color: '#333',
};

// Tagline styles for different fonts and variation
const taglineStylePrimary = {
    fontSize: '1.5rem',
    fontFamily: 'Century Gothic, sans-serif',
    color: '#444',
    fontStyle: 'italic',
    marginBottom: '15px',
};

const taglineStyleSecondary = {
    fontSize: '1.25rem',
    fontFamily: 'Century Gothic, sans-serif',
    color: '#444',
    fontStyle: 'italic',
    marginBottom: '25px',
};

// Button style for "Start Exploring"
const buttonStyle = {
    padding: '15px 30px',
    fontSize: '1rem',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#1e90ff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    marginTop: '20px',
};

// Right side image container styles
const imageContainerStyle = {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
};

// Footer positioning styles
const footerStyle = {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: 'auto',
};

// Main component
function Front() {
    return (
        <div style={style}>
            <div style={navbarStyle}>
                <Home />
            </div>

            <div style={contentStyle}>
                {/* Left side text content */}
                <div style={textContainerStyle}>
                    <h1 style={headingStyle}>Welcome to the Book Store</h1>
                    <p style={taglineStylePrimary}>Discover a world of knowledge and imagination</p>
                    <p style={taglineStyleSecondary}>From bestsellers to hidden gems, find your next favorite book</p>
                    <p style={taglineStylePrimary}>Read, Explore, and Get Inspired!</p>

                    {/* Button to explore */}
                    <Link to="/login" style={buttonStyle}>
                        Start Exploring
                    </Link>
                </div>

                {/* Right side image */}
                <div style={imageContainerStyle}>
                    <img
                        src="https://i.pinimg.com/564x/2e/90/c6/2e90c61cf565758cfa7b489c7add30ee.jpg" // Replace with actual image URL
                        alt="Bookshelf"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>

            <div style={footerStyle}>
                <Footer />
            </div>
        </div>
    );
}

// Export the Front component
export default Front;
