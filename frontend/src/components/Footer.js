import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sweet Delights</h4>
          <p>Making life sweeter, one candy at a time!</p>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: hello@sweetdelights.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Sweet Delights. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 