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
              <Card.Img variant="top" src="https://www.sperling.it/content/uploads/2021/06/978882007130HIG.JPG" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>THE INHERITANCE<br /> GAMES </Card.Title>
            </Card.Body>
          </Card>

          {/* Second Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.toaO6Oxgmk1vVRrhY0EePwHaLe?rs=1&pid=ImgDetMain" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>A GAME OF <br /> THRONES</Card.Title>
            </Card.Body>
          </Card>

          {/* Third Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.jqRJQ5mzfrM9WdpdRWmC0AHaLb?rs=1&pid=ImgDetMain" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>DIARY OF <br /> A WIMPY KID</Card.Title>
            </Card.Body>
          </Card>

          {/* Fourth Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://imgv2-1-f.scribdassets.com/img/word_document/251891517/original/41c439d8f6/1626299276?v=1" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>GREAT EXPECTATIONS</Card.Title>
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
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.K48dQmDvKrj6RhrNtzkWgQHaLL?rs=1&pid=ImgDetMain" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>ATOMIC HABITS</Card.Title>
            </Card.Body>
          </Card>

          {/* Seventh Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://www.thoughtco.com/thmb/SuveYjmc-r0wMBYj4QOea0cE7D0=/1488x2338/filters:fill(auto,1)/Twilight_book_cover-589fa4625f9b58819cb2e790.jpg" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>TWILIGHT</Card.Title>
            </Card.Body>
          </Card>

          {/* Eighth Card */}
          <Card className="product-card">
            <Link to='/uproducts'>
              <Card.Img variant="top" src="https://i.thenile.io/r1000/9780486412351.jpg?r=5e9c2050b1a5c" />
            </Link>
            <Card.Body>
              <Card.Title className='text-center' style={{ fontSize: '18px', fontWeight: 'bold' }}>HEIDI</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Uhome;
