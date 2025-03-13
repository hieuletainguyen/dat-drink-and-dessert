import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:5000/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/images/candy-logo.png" alt="Sweet Delights" />
          <span className="logo-text">Sweet Delights</span>
        </div>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#!" onClick={() => scrollToSection('hero')}>Home</a>
          <a href="#!" onClick={() => scrollToSection('products')}>Our Treats</a>
          <a href="#!" onClick={() => scrollToSection('about')}>About Us</a>
          <a href="#!" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <div className="auth-buttons">
          {user ? (
            <>
              <span className="welcome-text">Hello, {user.username}!</span>
              <button className="cart-btn" onClick={() => navigate('/cart')}>
                <i className="fas fa-shopping-cart"></i>
              </button>
              <button className="auth-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="auth-btn login-btn" onClick={() => navigate('/login')}>
                Login
              </button>
              <button className="auth-btn signup-btn" onClick={() => navigate('/register')}>
                Sign Up
              </button>
            </>
          )}
        </div>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 