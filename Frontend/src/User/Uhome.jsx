import React from 'react';
import Unavbar from './Unavbar';
import "./uhome.css";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Componenets/Footer';

const Uhome = () => {
  return (
    <div className="home-container" style={{
      backgroundImage: 'url(https://i.pinimg.com/564x/cf/8a/4f/cf8a4f7d36537e23f94bf01661b8cd09.jpg)',
      backgroundSize: 'cover',        // Ensures the image covers the screen
      backgroundPosition: 'center',   // Centers the image
      backgroundRepeat: 'no-repeat',  // Prevents the image from repeating if the container is larger than the image
      minHeight: '100vh',             // Ensures the container takes up at least the full height of the viewport
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Unavbar />

      <div className="container" style={{ flex: 1, padding: '20px' }}>
        <h1 className="text-center mb-4" style={{ fontSize: "40px", color: "#333333", fontWeight: 'bold' }}>Best Sellers</h1>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {/* First Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>RICH DAD <br /> POOR DAD</Card.Title>
            </Card.Body>
          </Card>

          {/* Second Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>THINK AND <br /> GROW RICH</Card.Title>
            </Card.Body>
          </Card>

          {/* Third Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>DON'T LET HER STAY</Card.Title>
            </Card.Body>
          </Card>

          {/* Fourth Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>KILLING THE WITCHES</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <br />

        <h1 className="text-center mb-4" style={{ fontSize: "40px", color: "#333333", fontWeight: 'bold' }}>Top Recommendations</h1>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {/* Fifth Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>HARRY POTTER</Card.Title>
            </Card.Body>
          </Card>

          {/* Sixth Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>ELON MUSK</Card.Title>
            </Card.Body>
          </Card>

          {/* Seventh Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544102229i/42983957.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>THE MOSQUITO</Card.Title>
            </Card.Body>
          </Card>

          {/* Eighth Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>JOURNEY ON THE JAMES</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Uhome;
