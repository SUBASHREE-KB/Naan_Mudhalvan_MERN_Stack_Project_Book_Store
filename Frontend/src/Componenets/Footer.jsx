import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#00072D', 
      padding: '20px', 
      textAlign: 'center', 
      color: '#ffffff',
      width: '100%' 
    }}>
      <p style={{ fontSize: '14px', fontStyle: 'italic', margin: '5px 0' }}>
        "A book is a dream that you hold in your hands – welcome to a world of endless stories!"
      </p>

      <p style={{ fontSize: '12px', margin: '5px 0', opacity: '0.8' }}>
        &copy; {new Date().getFullYear()} BookStore. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
