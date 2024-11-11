// Front.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import './Front.css';

// Navbar positioning styles
const navbarStyle = {
    width: '100%',
    position: 'relative',
    top: 0,
    left: 0,
    zIndex: 1,
};

// Content container styles for split layout
// Content container styles for split layout with transparent background image
const contentContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '80px',
    paddingBottom: '60px',
    position: 'relative', // Required for positioning the pseudo-element
    minHeight: 'calc(100vh - 140px)',
};

// Pseudo-element to handle the background image and transparency
const contentContainerPseudoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("https://img.freepik.com/premium-photo/open-book-with-blue-background-words-open_847439-9006.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.5, // Adjust the transparency of the background image here
    zIndex: 0, // Ensures the image is behind the content
};

// Content styling for text and image section
const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    maxWidth: '1200px',
};

// Left side text container styles
const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    maxWidth: '50%',
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
    backgroundColor: '#00072D',
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

// Book image URLs for demonstration (replace with your own URLs)
const bookImages = [
    "https://cdn2.penguin.com.au/covers/400/9781785151552.jpg",
    "https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg",
    "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594851437i/19486412.jpg",
    "https://d1fa9n6k2ql7on.cloudfront.net/KFFQT96YQL2J4NM1664836845.jpg",
    "https://ew.com/thmb/RNSjDY3vXsAmYPgvzNG-SbZibYo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/minalima_hp1_flat_compressed-f9e6bda269a545a28f8bd9e50ed5f70b.jpg",
    "https://m.media-amazon.com/images/I/81LrorlYRJL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71H52+sSb4L._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61jLXXAJgoL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71y1NKGcGKL._AC_UF1000,1000_QL80_.jpg",
];

// Custom rotating carousel component
function BookCarousel() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollLeft += 2; // Increased increment for visible movement

                // Reset scroll to start for a seamless loop effect
                if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
                    carouselRef.current.scrollLeft = 0;
                }
            }
        }, 15); // Adjusted interval to control speed

        return () => clearInterval(scrollInterval); // Clean up on unmount
    }, []);

    return (
        <div
            ref={carouselRef}
            style={{
                display: 'flex',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                padding: '20px 0',
                backgroundColor: '#f4f4f4',
            }}
        >
            {/* Repeat the images to create a seamless effect */}
            {[...bookImages, ...bookImages].map((src, index) => (
                <div
                    key={index}
                    style={{
                        width: '150px',
                        margin: '0 10px',
                        display: 'inline-block',
                        flexShrink: 0,
                    }}
                >
                    <img
                        src={src}
                        alt={`Book ${index + 1}`}
                        style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                    />
                </div>
            ))}
        </div>
    );
}


// Main component
function Front() {
    return (
        <div>
            {/* Navbar */}
            <div style={navbarStyle}>
                <Home />
            </div>

            {/* Content Section with Background */}
           
<div style={contentContainerStyle}>
    <div style={contentContainerPseudoStyle}></div> {/* Background Image with Transparency */}
    <div style={{ ...contentStyle, position: 'relative', zIndex: 1 }}>
        {/* Left side text content */}
        <div style={textContainerStyle}>
            <h1 className="typewriter-heading">Welcome to BookScape</h1>
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
                src="https://m.media-amazon.com/images/I/913Xkzwq8JL._AC_UF1000,1000_QL80_.jpg"
                alt="Bookshelf"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    </div>
</div>

            {/* Carousel Section */}
            <div style={{ padding: '20px 0' }}>
                <BookCarousel />
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Front;
