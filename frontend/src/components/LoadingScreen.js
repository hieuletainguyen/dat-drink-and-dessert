import React from 'react';
import '../styles/LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="candy-loader">
        <div className="candy-piece"></div>
        <div className="candy-piece"></div>
        <div className="candy-piece"></div>
      </div>
      <p className="loading-text">Sweet Delights</p>
    </div>
  );
}

export default LoadingScreen; 