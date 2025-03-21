import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId) => {
    // If we're not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMenuOpen(false); // Close mobile menu after click
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
          <img src={process.env.PUBLIC_URL + "/images/candy-logo.png"} alt="Sweet Delights" />
          <span className="logo-text">Sweet Delights</span>
        </div>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span>-</span>
          <span>-</span>
          <span>-</span>
        </button>
        
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#!" onClick={() => scrollToSection('hero')}>Home</a>
          <a href="#!" onClick={() => scrollToSection('products')}>Our Treats</a>
          <a href="#!" onClick={() => scrollToSection('about')}>About Us</a>
          <a href="#!" onClick={() => scrollToSection('contact')}>Contact</a>
          <div className="theme-switch-wrapper">
            <label className="theme-switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        <div className={`auth-buttons ${user ? 'logged-in' : ''}`}>
          {user ? (
            <>
              <span className="welcome-text">Hello, {user.username}!</span>
              <button className="cart-btn" onClick={() => navigate('/cart')}>
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
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
      </div>
    </nav>
  );
}

export default Navbar; 