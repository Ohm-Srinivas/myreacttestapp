import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Its My Application: Footer</p>
    </footer>
  );
};

export default Footer;
