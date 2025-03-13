import React from 'react';

export const Lollipop = ({ color = '#FF69B4', ...props }) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill={color} d="M15,8a3,3,0,1,0-3,3A3,3,0,0,0,15,8ZM12,9a1,1,0,1,1,1-1A1,1,0,0,1,12,9Z"/>
    <path fill={color} d="M12,1A7,7,0,0,0,5,8a6.84,6.84,0,0,0,.69,3L9,23l6-12A7,7,0,0,0,12,1Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,12,13Z"/>
  </svg>
);

export const CandyCane = ({ color = '#FF69B4', ...props }) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill={color} d="M10,2C8.34,2,7,3.34,7,5v9.17C7,15.17,8.34,16,10,16h4c1.66,0,3-0.83,3-1.83V5c0-1.66-1.34-3-3-3H10z"/>
    <path fill={color} d="M14,17H10c-0.55,0-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-4C15,17.45,14.55,17,14,17z"/>
  </svg>
);

export const Candy = ({ color = '#FF69B4', ...props }) => (
  <svg viewBox="0 0 24 24" {...props}>
    <circle fill={color} cx="12" cy="12" r="8"/>
    <path fill="#FFF" d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/>
  </svg>
);

export const Chocolate = ({ color = '#FF69B4', ...props }) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill={color} d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M18,18H6V6h12V18z"/>
    <rect fill={color} x="8" y="8" width="3" height="3"/>
    <rect fill={color} x="13" y="8" width="3" height="3"/>
    <rect fill={color} x="8" y="13" width="3" height="3"/>
    <rect fill={color} x="13" y="13" width="3" height="3"/>
  </svg>
); 