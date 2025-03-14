import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import ProductCard from '../components/ProductCard';
import LoadingScreen from '../components/LoadingScreen';
import { Lollipop, CandyCane, Candy, Chocolate } from '../components/CandyIcons';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Handle loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Add animation classes after component mounts
    const hero = document.querySelector('.hero'); 
    hero.classList.add('animate');

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Rainbow Lollipops",
      price: "$2.99",
      image: "/images/lollipop.png"
    },
    {
      id: 2,
      name: "Chocolate Truffles",
      price: "$4.99",
      image: "/images/truffle.png"
    },
    {
      id: 3,
      name: "Cotton Candy",
      price: "$3.99",
      image: "/images/cotton-candy.png"
    },
    {
      id: 4,
      name: "Bubble Tea",
      price: "$5.99",
      image: "/images/bubble-tea.png"
    },
    {
      id: 5,
      name: "Matcha Ice Cream",
      price: "$4.49",
      image: "/images/matcha-ice-cream.png"
    },
    {
      id: 6,
      name: "Fruit Smoothie",
      price: "$4.99",
      image: "/images/fruit-smoothie.png"
    }
  ];

  const candyIcons = [
    { Icon: Lollipop, color: '#ff69b4' },    // primary
    { Icon: CandyCane, color: '#ffa07a' },   // secondary
    { Icon: Candy, color: '#9370db' },       // accent
    { Icon: Chocolate, color: '#ff1493' },    // primary-dark
    { Icon: Lollipop, color: '#ffb6d9' },    // primary-light
    { Icon: Candy, color: '#ffd4c4' },       // secondary-light
    { Icon: CandyCane, color: '#e6e6fa' },   // accent-light
    { Icon: Chocolate, color: '#ffa07a' },    // secondary
  ];

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="home">
        <section className="hero" id="hero">
          <div className="hero-content">
            <h1 className="hero-title" data-text="Welcome to Dat Drink and Dessert">
              Welcome to Dat Drink and Dessert
            </h1>
            <p className="hero-subtitle">
              Discover a World of Sweetness and Joy!
            </p>
            <div className="hero-cta">
              <button className="cta-button">
                Explore Our Treats
                <span className="button-sparkle"></span>
              </button>
            </div>
          </div>
          <div className="floating-candies">
            {candyIcons.map((candy, i) => (
              <div 
                key={i} 
                className={`candy candy-${i + 1}`}
                style={{
                  transform: `translateY(${scrollPosition * (0.1 * (i + 1))}px) rotate(${scrollPosition * 0.1}deg)`
                }}
              >
                <candy.Icon color={candy.color} />
              </div>
            ))}
          </div>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="arrow"></div>
          </div>
        </section>

        <section className="featured-products" id="products">
          <h2>Our Popular Treats</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>Sweet Moments, Sweet Memories</h2>
        </section>

        <section className="contact-section" id="contact">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>123 Candy Lane, Sweet City, SC 12345</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>(555) 123-4567</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>hello@sweetdelights.com</p>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home; 