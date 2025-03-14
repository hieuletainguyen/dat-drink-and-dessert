import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Dat Drink and Dessert</h4>
          <p>Making life sweeter, one candy at a time!</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: datdrinkanddessert@gmail.com</p>
          <p>Phone: (778) 939-5141</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=61574148623359">Facebook</a>
            <a href="https://www.instagram.com/dat_drink_dessert/">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Dat Drink and Dessert. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 